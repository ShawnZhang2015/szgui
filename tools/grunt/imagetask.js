var path = require('path');
var util = require('util');
var fs = require('fs');

var args = [
    'texturepacker',
    '%s',
    '--smart-update',
    '--format cocos2d',  
    '--opt RGBA5555',  
    '--allow-free-size',
    '--trim-mode None',
    '--max-size 2048',
    '--size-constraints POT',  
    '--trim',  
    '--enable-rotation',  
    '--dither-fs-alpha',  
    '--padding 2',
    '--data %s.plist',
    '--sheet %s.png',
];

var grunt = null;

module.exports = {
    init(g) {
        grunt = g;    
    },

    tp(opts){
        
        var {src, dest, cwd, name, compress, cleanold} = opts;

        name = name || path.basename(src);
        cleanold = grunt.option('cleanold') || cleanold;
        src = path.join(cwd, src);
        dst = path.join(dest, name);

        if (cleanold) {
            var plist = `${dst}.plist`;
            if (fs.existsSync(plist)) {
                grunt.log.oklns(`remove file: ${plist}`);
                fs.unlinkSync(plist);
            }

            var png = `${dst}.png`;    
            if (fs.existsSync(png)) {
                grunt.log.oklns(`remove file: ${png}`);
                fs.unlinkSync(png);
            }
        }
        

        var command = util.format(args.join(' '), src, dst, dst);

        if (compress && !grunt.option('nomin')) {
            var pngquant = this.min(`${dst}.png`);
            command = `${command} && ${pngquant}`;
        }
        grunt.verbose.writeln(command);
        return command;
    },

    min(filename){
        var ext = path.extname(filename);
        return `pngquant --verbose --force --ext ${ext} 256 ${filename}`;
    }
}