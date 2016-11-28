


module.exports = function (grunt) {

    var imageTask = require('./tools/grunt/imagetask');
    imageTask.init(grunt);

    grunt.initConfig({
        sync: {
            'gui': {
                files: [
                    {
                        cwd: './art/szgui/ui',
                        src: ['**/*.png', '!**/.DS_Store', '!**/Thumbs.db'],
                        dest: './tp/gui'
                    }
                ],
                pretend: false,        //是否模拟
                verbose: true,         //显示日志
                updateAndDelete: true, //是否删除本地文件（在源目录中不存在的文件）  
                compareUsing: "md5"    // 可选md5/mtime      
            }            
        },

        shell: {
            'tp-gui-min': {
                command: () => imageTask.tp({ 
                    cleanold: false,                    //目的路径有文件先删除 --cleanold 控制是否删除
                    cwd: './tp/',                       //工作目录
                    src: 'gui',                         //原文件目录
                    dest: './assets/resources/szres/',  //输出目录
                    name: '',                           //输出文件名 默认使用 path.basename(src)
                    compress: true,                     //是否压缩 可以使用 --nomin 控制是否压缩
                })       
            },
                
            'tp-gui': {
                command: () => imageTask.tp({ cwd: './tp/', src: 'gui', dest: './assets/resources/szres/', name: 'gui'}),
            },

            'svn-up-art': {
                command:'echo "从svn更新美术资源文件"'
            },

            'svn-up-config': {
                command:'echo "从svn更新配置文件"'    
            },

            'svn-ci' : {
                command: () => {
                    // console.log(grunt.config);
                    return `echo svn ci -m "${grunt.option('m')}"`        
                }     
            }
        },

        


    });

    //加载包含任务的插件。
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-shell');


    grunt.registerTask(
        'upgui', 
        '从SVN更新UI资源并合图、压缩，\n:notp 只从SVN更新不合图 \n--nomin 不压缩 \n--cleanold 生成合图时先清除', 
        (notp) => {
            var tasks = [
                'shell:svn-up-art',
                'sync:gui',
                'shell:tp-gui-min'
            ]
            if (notp) {
                tasks.pop();
            }
            grunt.task.run(tasks);
    });
}