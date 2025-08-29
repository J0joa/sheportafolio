import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function SinUp() {
  // --- ESTADOS LOGIN / REGISTRO DE USUARIO ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savedName, setSavedName] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [acceso, setAcceso] = useState(false);

  // --- ESTADOS CONTACTOS ---
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    correo: "",
    mensaje: "",
  });
  const [datos, setDatos] = useState([]);

  // --- VALIDAR DOMINIOS ---
  const validarEmailPermitido = (correo) => {
    const c = (correo || "").trim().toLowerCase();
    return /^[a-z0-9._%+-]+@(gmail|hotmail)\.com$/.test(c);
  };

  // --- CARGAR DATOS GUARDADOS ---
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedName && storedEmail && storedPassword) {
      setSavedName(storedName);
      setSavedEmail(storedEmail);
      setSavedPassword(storedPassword);
    }
    const storedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    setDatos(storedContacts);

    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      setAcceso(true);
      setEmail(loggedUser);
    }

    // --- INICIALIZAR GOOGLE SIGN-IN ---
    /* global google */
    const initializeGoogle = () => {
      google.accounts.id.initialize({
        client_id:
          "820403337294-9cl2p2ljob6eruk3j1ld55p9pmoo6vs7.apps.googleusercontent.com",
        callback: handleGoogleResponse,
      });
      google.accounts.id.renderButton(document.getElementById("googleButton"), {
        theme: "outline",
        size: "large",
      });
    };

    if (window.google) initializeGoogle();
    else {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogle;
      document.body.appendChild(script);
    }
  }, []);

  // --- GOOGLE CALLBACK ---
  const handleGoogleResponse = (response) => {
    try {
      const user = jwtDecode(response.credential);

      // Solo permitir la cuenta autorizada
      if (user.email !== "emily@gmail.com") {
        alert("Acceso denegado: solo la cuenta autorizada puede ingresar.");
        return;
      }

      localStorage.setItem("loggedUser", user.email);
      setSavedName(user.name);
      setEmail(user.email);
      setAcceso(true);
    } catch (error) {
      console.error("Error al decodificar JWT de Google", error);
    }
  };

  // --- GUARDAR CONTACTO ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosDatos = [...datos, formData];
    setDatos(nuevosDatos);
    localStorage.setItem("contacts", JSON.stringify(nuevosDatos));
    setFormData({ nombre: "", edad: "", correo: "", mensaje: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- GUARDAR / MODIFICAR USUARIO ---
  const handleSaveData = (e) => {
    e.preventDefault();

    const emailNorm = newEmail.trim().toLowerCase();
    const passwordNorm = newPassword;

    // Solo permitir la cuenta específica
    if (emailNorm !== "emily@gmail.com" || passwordNorm !== "1234567") {
      alert("Solo se puede registrar/modificar la cuenta autorizada.");
      return;
    }

    localStorage.setItem("name", newName);
    localStorage.setItem("email", emailNorm);
    localStorage.setItem("password", passwordNorm);
    setSavedName(newName);
    setSavedEmail(emailNorm);
    setSavedPassword(passwordNorm);
    setNewName("");
    setNewEmail("");
    setNewPassword("");
    alert("Datos guardados/modificados con éxito");
  };

  // --- LOGIN ---
  const handleLogin = (e) => {
    e.preventDefault();

    const emailNorm = email.trim().toLowerCase();

    // Validar que sea la única cuenta autorizada
    if (emailNorm !== "emily@gmail.com") {
      alert("Acceso denegado: solo la cuenta autorizada puede ingresar.");
      return;
    }

    if (
      emailNorm === savedEmail &&
      password === savedPassword &&
      savedEmail !== ""
    ) {
      setAcceso(true);
      localStorage.setItem("loggedUser", emailNorm);
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  // --- LOGOUT ---
  const handleLogout = () => {
    setAcceso(false);
    setEmail("");
    setPassword("");
    localStorage.removeItem("loggedUser");
  };

  // --- BORRAR CONTACTOS ---
  const clearDatos = () => {
    setDatos([]);
    localStorage.removeItem("contacts");
  };

  return (
    <div className=" h-auto md:h-screen  lg:snap-start lg:snap-always lg:h-screen p-6 grid grid-cols-1 grid-flow-row gap-6 items-center ">
      {/* CONTACTOS (LIBRE) */}
      <a
        href="#main"
        className="absolute z-1000 m-auto right-[3vw] top-[3vh] bg-emerald-300 p-4 rounded-[5px] font-bold text-blue-950 hover:text-blue-300 hover:bg-blue-950  "
      >
        Back
      </a>
      <div>
        <h1 className="text-2xl font-bold mb-4">Contact Me !Please! </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mt-2 max-w-md mx-auto p-2 bg-gray-100 rounded-xl shadow"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="edad"
            placeholder="Edad"
            value={formData.edad}
            onChange={handleChange}
            className="p-1 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={formData.correo}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* REGISTRO / LOGIN */}
      <h1 className="m-2 text-[12px] md:text-2xl lg:text-2xl font-bold">
        web developer single sign-on
      </h1>
      <div className="grid grid-cols-1 items-center justify-center m-auto gap-20 md:grid-cols-2 md:grid-flow-col ">
        <form
          onSubmit={handleSaveData}
          className="flex flex-col gap-2 p-2 border-1 border-gray-100 rounded shadow w-[80vw] md:w-[45vw]"
        >
          <h2 className=" border-1 border-gray-100 text-lg font-bold">Web Developer</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border-[1px] border-gray-300 p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Correo (Gmail o Hotmail)"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="border-[1px] border-gray-300 p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border-[1px] border-gray-300 p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Guardar
          </button>
        </form>

        {!acceso ? (
          <div className="flex flex-col gap-2 p-2 border rounded shadow w-[80vw] md:w-[40vw]">
            <form onSubmit={handleLogin} className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Acceder al contenido</h2>
              <input
                type="email"
                placeholder="Correo (Gmail o Hotmail)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Acceder
              </button>
            </form>
            <div id="googleButton" className="flex justify-center"></div>
          </div>
        ) : (
          <div className="p-2 bg-green-100 border-1 border-amber-100 rounded shadow w-auto text-center">
            <h2 className="text-xl font-bold">Contenido protegido</h2>
            <p>¡Bienvenido, {savedName || email}!</p>
            {datos.length > 0 && (
              <div className="overflow-y-auto hide-scrollbar border-2 flex flex-col items-center border-amber-200 rounded-[4px] p-2 m-2 max-h-60">
                <table className="mt-3 border border-gray-300 mx-auto w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Nombre</th>
                      <th className="border p-2">Edad</th>
                      <th className="border p-2">Correo</th>
                      <th className="border p-2">Mensaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datos.map((d, i) => (
                      <tr key={i}>
                        <td className="border p-2">{d.nombre}</td>
                        <td className="border p-2">{d.edad}</td>
                        <td className="border p-2">{d.correo}</td>
                        <td className="border p-2">{d.mensaje}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={clearDatos}
                  className="bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600"
                >
                  Borrar todos los contactos
                </button>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="mt-3 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
