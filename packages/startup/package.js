Package.describe({
  summary: "Deprecated package (now empty)",
  version: "1.0.2-ipc.0"
});

Package.on_use(function (api) {
  // Deprecated -- Meteor.startup has been folded into the main
  // 'meteor' package for now, because it seems reasonable to expect
  // that Meteor.startup would always be available without having to
  // include a special package.
});
