rm -rf ../docs/*;
#node --inspect-brk\
  ../../docco/bin/docco\
  -p ./plugin.js\
	-c tpe.css\
       	-t tpe.ejs\
       	-o ../docs\
       	index.md\
       	quickstart-designers.md\
       	tutorials-designers.md\
       	tutorials-designers/*\
       	quickstart-developers.md\
       	tutorials-developers.md\
       	tutorials-developers/*\
        elements.md\
       	elements/ee*.js\
        elements/en*.js\
        elements/nn*.js\
        mixins.md\
        mixins/*.js\
        appendices.md\
        appendices/*.md\
        material-theme.md\
        material-theme/*.js
cp -r ./images ../docs/
