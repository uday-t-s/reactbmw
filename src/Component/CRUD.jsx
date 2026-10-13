import React, { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

export default function CRUD() {
  const [enquiry, setEnquiry] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setEnquiry(data);
      });
  }, []);

  const addItem = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (name && email) {
      fetch(API, {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const newEnquiry = { ...data, id: enquiry.length + 1 };
          setEnquiry([...enquiry, newEnquiry]);
          setName("");
          setEmail("");
          setPhone("");
        })
        .catch(() => {
          const newEnquiry = {
            name: trimmedName,
            email: trimmedEmail,
            phone,
            id: enquiry.length + 1,
          };
          setEnquiry([...enquiry, newEnquiry]);
          setName("");
          setEmail("");
          setPhone("");
        });
    }
  };

  const handleEdit = (person) => {
    setEditId(person.id);
    setName(person.name);
    setEmail(person.email);
    setPhone(person.phone || "");
  };

  const handleUpdate = () => {
    if (name && email) {
      const applyUpdate = () => {
        setEnquiry((enquiry) =>
          enquiry.map((person) =>
            person.id === editId ? { ...person, name, email, phone } : person,
          ),
        );
        setEditId(null);
        setName("");
        setEmail("");
        setPhone("");
      };
      // JSONPlaceholder only has users 1-10, so a PUT on a locally-added
      // enquiry (id 11+) returns an error - fall back to a local update either way
      fetch(`${API}/${editId}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          email,
          phone,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then(applyUpdate)
        .catch(applyUpdate);
    }
  };

  const handleDelete = (id) => {
    const applyDelete = () => {
      setEnquiry((enquiry) => {
        return enquiry.filter((person) => person.id !== id);
      });
      if (editId === id) {
        setEditId(null);
        setName("");
        setEmail("");
        setPhone("");
      }
    };
    fetch(`${API}/${id}`, {
      method: "DELETE",
    })
      .then(applyDelete)
      .catch(applyDelete);
  };

  return (
    <div>
      <h2>Customer enquiries</h2>
      <p className="hint-text">
        Add, edit, and delete requests go to JSONPlaceholder, which simulates the response
        but does not actually save the change.
      </p>
      <div className="table-scroll">
      <table className="data-table">
        <thead>
          <tr>
            <td>Sn.o</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>option</td>
          </tr>
        </thead>
        <tbody>
          {enquiry.map((person) => (
            <tr key={person.id}>
              <td data-label="Sn.o">{person.id}</td>
              <td data-label="Name">{person.name}</td>
              <td data-label="Email">{person.email}</td>
              <td data-label="Phone">{person.phone}</td>
              <td data-label="Option">
                <button onClick={() => handleEdit(person)}>edit</button>
                <button onClick={() => handleDelete(person.id)}>delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td data-label="Sn.o"></td>
            <td data-label="Name">
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td data-label="Email">
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td data-label="Phone">
              <input
                type="text"
                placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </td>
            <td data-label="Option">
              {editId ? (
                <button onClick={handleUpdate}>update</button>
              ) : (
                <button onClick={addItem}>add</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
