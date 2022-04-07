//   aqui dentro vamos criar o cadastro do nosso admin 

import { hash } from "bcryptjs";
import { v4 as uuidV4} from "uuid";
// com getConnection poderemos obter a nossa conexão aqui 

import createConnection from '../index'

async function create(){
  const connection = await createConnection("localhost");
  
  const id = uuidV4()
  
  const password = await hash("mariamarta", 8)
  
  await connection.query(
    `INSERT INTO USERS(id,name ,email, password, "isAdmin", created_at, driver_license)
    VALUES('${id}', 'Cristiano Azevedo','cristiccorrea@gmail.com', '${password}', true, 'now()', 'xxxx-xx')  
     `
     );

     await connection.close();
}
 
create().then(() => { console.log("user admin crerated 🚀🚀")})