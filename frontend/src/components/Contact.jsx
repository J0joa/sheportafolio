import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    correo: "",
    mensaje: "",
  });

  const [datos, setDatos] = useState([]); // Estado para guardar los registros

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos([...datos, formData]); // Agrega el formulario enviado al array
    setFormData({ nombre: "", edad: "", correo: "", mensaje: "" }); // Limpia el formulario
  };

  return (
    <section
      id="contacts"
      className="h-screen grid grid-cols-1 items-center justify-center"
    >
      
    </section>
  );
}
