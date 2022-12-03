import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  let esp = router.locale == 'en-US' ? "Spanish" : 'es' ? "Español" : ";"
  let eng = router.locale == 'en-US' ? "English" : 'es' ? "Inglés" : ";"
  let Administracion_e = router.locale == 'en-US' ? "Employee Administration" : 'es' ? "Administración de Empleados" : ";"
  let producto = router.locale == 'en-US' ? "Products" : 'es' ? "Productos" : ";"
  let agregar = router.locale == 'en-US' ? "Add product" : 'es' ? "Añadir Producto" : ";"
  let nombre = router.locale == 'en-US' ? "Name" : 'es' ? "Nombre" : ";"
  let cargo = router.locale == 'en-US' ? "Position" : 'es' ? "Cargo" : ";"
  let apellido = router.locale == 'en-US' ? "Last Name" : 'es' ? " Apellidos" : ";"
  let celular = router.locale == 'en-US' ? "Cell Phone" : 'es' ? "Celular" : ";"
  let correo = router.locale == 'en-US' ? "Email" : 'es' ? "Correo" : ";"
  let editar = router.locale == 'en-US' ? "Edit" : 'es' ? "Editar" : ";"
  let eliminar = router.locale == 'en-US' ? "Delete" : 'es' ? "Eliminar" : ";"
  let uds = router.locale == 'en-US' ? "Units" : 'es' ? "Uds." : ";"
  return (
    <div>
      <Head>
        <title>FullStore {Administracion_e}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/812c8ee19a.js" crossOrigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
      </Head>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src="/logo.svg" alt="Vercel Logo" width={160} height={50} />
          </a>
          <div className="d-flex">
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <a href="/es/empleados">{esp}</a> 
              </button>
              <button  className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <a href="/en-us/empleados">{eng}</a> 
              </button>
              <button  className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <a href="/">{producto}</a> 
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="card text-center m-4">
          <div className="card-header bg-dark">
            {Administracion_e}
          </div>
          <div className="card-body">
            <div className="text-end">
              <button className="btn btn-danger mb-3"><i className="fa-solid fa-user-plus"></i> {agregar}</button>
            </div>

            <table className="table">
              <thead className="table-dark">
                <tr>
                  <td>DNI</td>
                  <td>{nombre}</td>
                  <td>{apellido}</td>
                  <td>{cargo}</td>
                  <td>{celular}</td>
                  <td>{correo}</td>
                  <td>{editar}</td>
                  <td>{eliminar}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>72806558</td>
                  <td>Raúl</td>
                  <td>Díaz Cabrera</td>
                  <td>Programador</td>
                  <td>929481293</td>
                  <td>72806558@certus.edu.pe</td>
                  <td><button className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i> {editar}</button></td>
                  <td><button className="btn btn-danger"><i className="fa-solid fa-trash-can"></i> {eliminar}</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted">
            FullStore S.A.C.
          </div>
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
    </div>
  )
}
