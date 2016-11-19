bin = ./bin/build.js
dist = ./dist
module = ./node_modules

build: $(module) $(dist)
	@node $(bin) > $(dist)/snippets.json

clean:
	@rm -rf $(dist)

install link:
	@npm $@

$(dist):
	@mkdir $(dist)

$(module):
	@npm install

.PHONY: build
