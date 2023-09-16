fx_version 'cerulean'
game 'gta5'
lua54 'yes'


client_scripts {
    'dist/client/*.js',
}

server_scripts {
    'dist/server/*.js',
}

ui_page "dist/web/index.html"
files {
	"dist/web/index.html",
	"dist/web/**/*",
}