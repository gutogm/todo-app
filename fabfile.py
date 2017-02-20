# -*- coding: utf-8 -*-
    
from fabric.api import *

'''
    LEMBRETE: A CHAVE PUBLICA DEVE ESTAR NO USUÁRIO QUE RECEBERÁ A CONEXAO
'''
# fab -H localhost

env.use_ssh_config = False
env.key_filename = '/home/guto/.ssh/id_rsa.pub'

@hosts("192.168.0.246")
def todo():
    env.user = 'guto'
    with cd("~/workspace/todo"):
        run("git pull origin master")
        run("pm2 update")