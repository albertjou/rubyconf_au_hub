###
# Blog settings
###

# Time.zone = "UTC"
activate :livereload
activate :the_hub do |h|
  h.days = %w{ Wednesday Thursday Friday}

  h.sessions = {
    :wednesday => [ '9:00AM'
  ],
  :thursday => [ '9:00am', '10:15am', '11:00am', '11:45am', '2:00pm', '2:40pm', '3:20pm', '4:15pm'
  ],
  :friday => [ '9:00am', '10:15am', '11:00am', '11:45am', '2:00pm', '2:40pm', '3:20pm', '4:15pm'
  ]
  }

  h.breakouts = {
    wednesday: {
  },
   thuresday: {
  },
    friday: {
  }
}

  h.rooms = ['Room 1', 'Room 2']
end

activate :directory_indexes

page "/feed.xml", layout: false

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###
#

with_layout :speaker_layout do
  page "/speakers/*"
end

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", layout: false
#
# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
