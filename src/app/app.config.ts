export const appConfig = {
  // URL base de tu API de Spring Boot
  apiUrl: 'http://localhost:8080',  // Asumiendo que Spring Boot corre en localhost:8080

  // Título de la aplicación
  appTitle: 'Sazón Rosita',

  // Si tienes algún token de autenticación (por ejemplo, para JWT), lo puedes colocar aquí
  authToken: '',  // Vacío, ya que el token vendría de un servicio de autenticación

  // Configuración para habilitar/deshabilitar el modo de desarrollo
  isDevMode: true,  // Cambiar a false en producción
};
