require 'webrick'
include WEBrick

local_magia = HTTPServer.new(
  :Port => 7070,
  :DocumentRoot => "."
)

local_magia.start
