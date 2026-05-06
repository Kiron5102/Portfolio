import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contact");
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
      }
    } catch (err) {
      setError("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE"
      });
      const data = await response.json();
      if (data.success) {
        setContacts(contacts.filter(c => c._id !== id));
      }
    } catch (err) {
      alert("Failed to delete");
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  if (loading) return <div className="text-center p-10 text-white">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-400">{error}</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Admin <span className="text-cyan-400">Panel</span>
        </motion.h1>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">
            Total Messages: <span className="text-cyan-400">{contacts.length}</span>
          </h2>

          {contacts.length === 0 ? (
            <p className="text-slate-400 text-center py-8">No messages yet!</p>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <motion.div
                  key={contact._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-slate-800 rounded-lg p-4 border border-slate-700"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-white">{contact.name}</h3>
                        <span className="text-sm text-slate-400">{formatDate(contact.createdAt)}</span>
                      </div>
                      <p className="text-cyan-400 mb-2">{contact.email}</p>
                      <p className="text-slate-300">{contact.message}</p>
                    </div>
                    <button
                      onClick={() => deleteContact(contact._id)}
                      className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;