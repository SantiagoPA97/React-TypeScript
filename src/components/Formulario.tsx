import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number
}

export const Formulario = () => {

  const { formulario, onInputChange } = useForm<FormData>({ 
    email: 'sa', 
    nombre: 're', 
    edad: 25
  });

  const { email, nombre } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input value={email} onChange={ onInputChange } type="email" className="form-control" name="email"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input value={nombre} onChange={ onInputChange } type="text" className="form-control" name="nombre"/>
      </div>

      <pre>{ JSON.stringify(formulario) }</pre>
    </form>
  )
}
