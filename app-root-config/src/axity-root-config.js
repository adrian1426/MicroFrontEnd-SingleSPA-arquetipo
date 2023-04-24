import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@axity/mf-navbar",
  app: () => System.import("@axity/mf-navbar"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
