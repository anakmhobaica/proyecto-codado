import loki from "lokijs";
import lokiIndexedAdapter from 'lokijs/src/loki-indexed-adapter';

export const initDB = () => {
  let coll = db.getCollection("users");
  if (!coll) {
    coll = db.addCollection("users", {
      unique: ["email"],
      indices: ["email"],
      autoupdate: true,
    });
  }
};

const adapter = new lokiIndexedAdapter();
export const db = new loki("codado.db", {
  adapter: adapter,
  autoload: true,
  autoloadCallback: initDB,
  autosave: true,
  autosaveInterval: 4000,
});
