const { MongoClient } = require('mongodb');
const mongoString = "mongodb+srv://simsd1234:hoRE0OMZY81GhBIe@pen1s.albyn5a.mongodb.net/?retryWrites=true&w=majority";

async function main() {
    
    
    const client = new MongoClient(mongoString);

    try {
       
        await client.connect();
       
        await listDB(client);
    } catch (e) {
       
        console.error(e)
    } finally {
       
        await client.close();
    }
}

async function listDB(client) {
    let list = await client.db().admin().listDatabases();
   
    console.log("Lista baz danych na serwerze:");
    
    list.databases.forEach(database => {
        
        console.log("Baza: " + database.name);
    });
}


main().catch(console.error);