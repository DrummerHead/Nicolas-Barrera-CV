require 'webrick'
include WEBrick

local_magia = HTTPServer.new(
  :Port => 8070,
  :DocumentRoot => "."
)

local_magia.start
