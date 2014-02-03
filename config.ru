require 'bundler/setup'
require 'rack'
require 'rack/contrib/try_static'
require 'rack/rewrite'


# This file is used by Rack-based servers to start the application.

use Rack::Rewrite do
  r302 '/feed.xml', 'http://feedpress.me/multifaceted', :if => Proc.new {|rack_env| !(rack_env['HTTP_USER_AGENT'] =~ /(FeedValidator|FeedPress)/)}
  rewrite '/feed.xml', '/atom.xml', :if => Proc.new {|rack_env| rack_env['HTTP_USER_AGENT'] =~ /(FeedValidator|FeedPress)/}
end

use ::Rack::TryStatic, :urls => %w[/], :root => 'public', :try => ['.html','/index.html']

run lambda { |env|
  [
    404,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=300'
    },
    File.open('public/404/index.html', File::RDONLY)
  ]
}
