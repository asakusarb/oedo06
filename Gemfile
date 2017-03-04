# If you have OpenSSL installed, we recommend updating
#
# the following line to use "https"
source 'http://rubygems.org'

ruby "2.4.0"

gem "middleman"
gem 'middleman-autoprefixer'
gem 'middleman-sprockets'
gem 'middleman4-sprockets3-sassc', '~> 0.0.4'
gem 'oulu'

# Live-reloading plugin
gem "middleman-livereload"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

group :production do
  gem 'rack-contrib'
  gem 'thin'
end

group :development do
	gem 'pry'
end

gem "rake"
