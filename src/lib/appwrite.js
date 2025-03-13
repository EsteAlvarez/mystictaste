import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // URL del servidor Appwrite
  .setProject("67d1c2910019ff885503"); // ID del proyecto

const databases = new Databases(client);

async function fetchMenuItems() {
  try {
    const response = await databases.listDocuments(
      "67d1c35e00255cd5852e", // ID de la base de datos
      "67d1c43100093021d832" // ID de la colección
    );

    // Extraer los datos específicos de cada documento
    const menuItems = response.documents;

    console.log(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
  }
}

// Llamar a la función para obtener los datos
fetchMenuItems();
