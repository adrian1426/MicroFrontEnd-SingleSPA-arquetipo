import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@axity/mf-navbar",
  app: () => System.import("@axity/mf-navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@axity/mf-profile",
  app: () => System.import("@axity/mf-profile"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
