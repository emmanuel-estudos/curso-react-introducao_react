import sys
import os

# Pega o caminho absoluto da pasta onde ESTE arquivo gerar_apostila.py está
diretorio_do_curso = os.path.dirname(os.path.abspath(__file__))

# Configura o caminho para a Wiki (que está ao lado da pasta do curso)
caminho_wiki = os.path.abspath(os.path.join(diretorio_do_curso, '..', 'Wiki'))

if caminho_wiki not in sys.path:
    sys.path.append(caminho_wiki)

try:
    from utils import mesclar_markdowns
except ImportError:
    print(f"❌ Erro: Não encontrei a Wiki em: {caminho_wiki}")
    sys.exit(1)

# Agora passamos 'diretorio_do_curso' em vez de '.'
mesclar_markdowns(
    pasta_origem=diretorio_do_curso, # automático
    prefixo_busca='aula_', # prefixo dos arquivos que devem ser mesclados
    nome_saida='Introducao_React-Apostila.md', # nome do arquivo final
    titulo_documento='Introdução ao React', # título do arquivo final
    arquivo_estilo='styles.md' # arquivo de estilo que deve ser aplicado ao markdown
)