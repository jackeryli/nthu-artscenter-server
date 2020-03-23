import app from "./app";
import { Exhibition } from "./models/Exhibition";
import { Media } from "./models/Media";
import { Publication } from "./models/Publication";



app.listen(app.get("port"), async () => {
  try {
    await Exhibition.sync({alter: true});
    await Publication.sync({alter: true});
    // Media should create behind Exhibition and Publication
    await Media.sync({alter: true});


    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ app.get("port") }` );
  } catch(err) {
    // tslint:disable-next-line:no-console
    console.log(err);
  }

})