
const socket = io();
import ProductManager from "./src/productManager";


// Compila la plantilla del cuerpo de la tabla.
const bodyTemplate = Handlebars.compile(`{{#each productos}}
                                        <tr>
                                            <td>{{id}}</td>
                                            <td>{{title}}</td>
                                            <td>{{price}}</td>
                                            <td>{{stock}}</td>
                                        </tr>
                                    {{/each}}`);

socket.on('updateProducts', (productos) => {

  // Inserta el cuerpo de la tabla en el documento HTML.
  const body = bodyTemplate({ productos });
  document.getElementById('prods').innerHTML = body;
});

const productManager = new ProductManager();

document.getElementById("eliminarBtn").addEventListener("click", async () => {
    // Obtén el ID del producto a eliminar del formulario.
    const id = document.getElementById("id").value;

    // Elimina el producto del `productos.json`.
    try {
      await productManager.deleteProduct(id);
    } catch (error) {
      // Maneja el error.
      console.error(error);
      return;
    }

    // Actualiza la página para reflejar el cambio.
    // Esto puede hacerse de varias maneras, dependiendo de cómo esté estructurada tu aplicación.
    // Por ejemplo, puedes recargar la página o actualizar la lista de productos manualmente.
  });






