import React, { useState } from 'react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('menaxhimiLendeve');

  // Subjects CRUD state
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Matematikë' },
    { id: 2, name: 'Fizikë' },
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [formName, setFormName] = useState('');
  const [editingId, setEditingId] = useState(null);

  const resetForm = () => {
    setFormName('');
    setEditingId(null);
    setFormVisible(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim()) return alert('Ju lutem shkruani emrin e lëndës.');

    if (editingId) {
      setSubjects(subjects.map(s => (s.id === editingId ? { ...s, name: formName } : s)));
    } else {
      const newId = subjects.length ? Math.max(...subjects.map(s => s.id)) + 1 : 1;
      setSubjects([...subjects, { id: newId, name: formName }]);
    }
    resetForm();
  };

  const handleEdit = (id) => {
    const subj = subjects.find(s => s.id === id);
    setFormName(subj.name);
    setEditingId(id);
    setFormVisible(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('A jeni të sigurt që doni ta fshini këtë lëndë?')) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const tabs = [
    { id: 'menaxhimiLendeve', label: 'Menaxhimi i lëndëve' },
    { id: 'caktimiDetyrave', label: 'Caktimi i detyrave për studentët' },
    { id: 'shikimiDetyrave', label: 'Shikimi i detyrave të dorëzuara' },
    { id: 'vleresimiStudent', label: 'Vlerësimi i studentëve' },
    { id: 'dergimiNjoftimeve', label: 'Dërgimi i njoftimeve' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'menaxhimiLendeve':
        return (
          <div>
            <button
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => {
                resetForm();
                setFormVisible(true);
              }}
            >
              Shto një Lëndë
            </button>

            {formVisible && (
              <form onSubmit={handleFormSubmit} className="mb-6 w-full max-w-full sm:max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Emri i lëndës"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full mb-2"
                />
                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full sm:w-auto"
                  >
                    {editingId ? 'Ruaj Ndryshimet' : 'Shto Lëndën'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 w-full sm:w-auto"
                  >
                    Anulo
                  </button>
                </div>
              </form>
            )}

            {subjects.length === 0 ? (
              <p>Nuk ka lëndë të krijuara.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b">ID</th>
                      <th className="py-2 px-4 border-b">Emri i Lëndës</th>
                      <th className="py-2 px-4 border-b">Veprime</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map(({ id, name }) => (
                      <tr key={id} className="hover:bg-gray-100">
                        <td className="py-2 px-4 border-b text-center">{id}</td>
                        <td className="py-2 px-4 border-b truncate max-w-[200px]">{name}</td>
                        <td className="py-2 px-4 border-b space-x-2 text-center">
                          <button
                            onClick={() => handleEdit(id)}
                            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                          >
                            Edito
                          </button>
                          <button
                            onClick={() => handleDelete(id)}
                            className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            Fshi
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case 'caktimiDetyrave':
        return <p>Këtu caktoni detyra për studentët.</p>;
      case 'shikimiDetyrave':
        return <p>Këtu shikoni detyrat e dorëzuara nga studentët.</p>;
      case 'vleresimiStudent':
        return <p>Këtu bëhet vlerësimi i studentëve.</p>;
      case 'dergimiNjoftimeve':
        return <p>Këtu dërgoni njoftime për studentët.</p>;
      default:
        return <p>Zgjidhni një opsion nga sidebar-i.</p>;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 font-sans flex flex-col">
      <header className="bg-white shadow-md p-4 flex items-center justify-between md:hidden">
        <h1 className="text-xl font-semibold text-blue-900">Admin Panel</h1>
      </header>

      {/* Mobile horizontal tabs */}
      <nav className="md:hidden bg-blue-900 text-white flex overflow-x-auto whitespace-nowrap">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-shrink-0 px-4 py-3 border-b-4 ${
              activeTab === id ? 'border-yellow-400' : 'border-transparent'
            } hover:bg-blue-800 focus:outline-none`}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for md+ */}
        <aside className="hidden md:flex flex-col w-64 bg-blue-900 text-white p-6">
          <h2 className="text-2xl font-semibold mb-6"> Profesor</h2>
          <nav className="flex flex-col space-y-2">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`text-left p-2 rounded-md hover:bg-blue-700 focus:outline-none ${
                  activeTab === id ? 'bg-blue-700' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-grow p-4 md:p-6 overflow-y-auto w-full max-w-full bg-white text-black">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Admin;
