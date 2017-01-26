require 'rack/contrib/static_cache'
require 'rack/contrib/try_static'

root_path = File.expand_path('../build', __FILE__)

use Rack::CommonLogger

if ENV['USERNAME'] && ENV['PASSWORD']
  use Rack::Auth::Basic, "Restricted Area" do |username, password|
    username == ENV['USERNAME'] && password == ENV['PASSWORD']
  end
end

use Rack::TryStatic,
  root: root_path,
  urls: ['/'],
  try:  ['.html', 'index.html', '/index.html']

run lambda {|env| [404, {'Content-Type' => 'text/plain'}, ['Not found!']] }
