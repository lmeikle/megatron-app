// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'home.js': /^app\/home/,
      'todolist.js': /^app\/todolist/
    }
  },
  stylesheets: {
    joinTo: {
      'reset.css': /^app\/reset.css/,
      'home.css': /^app\/home/,
      'todolist.css': /^app\/todolist/
    }}
};

exports.plugins = {
  babel: {presets: ['latest']}
};
