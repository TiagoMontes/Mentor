<h1>Mentor</h1>
Este projeto foi criado usando Next.js, porém todo o ambiente de desenvolvimento e produção agora é executado via <strong>Docker</strong>.<br/>

<h2>Iniciando o Projeto</h2>
1. Clonar este repositório.<br/>
2. Executar o build dos contêineres:<br/>
   <code>docker compose build</code><br/>
3. Subir os contêineres:<br/>
   <code>docker compose up -d</code><br/>
4. Abra o navegador em <a href="http://localhost:3000">http://localhost:3000</a> para ver o resultado em execução.<br/>

<h2>Terminal no Contêiner</h2>
Para acessar o terminal (shell) do contêiner, use:<br/>
<code>docker exec -it &lt;nome_do_container&gt; sh</code><br/>
Substitua <em>&lt;nome_do_container&gt;</em> pelo nome correto exibido em <code>docker ps</code>.<br/>

<h2>Rotas Disponíveis</h2>
• <strong>API</strong>: <a href="http://localhost:3000/User/getInfo">http://localhost:3000/User/getInfo</a><br/>

<h2>Documentação Adicional</h2>
• <a href="https://nextjs.org/docs">Documentação Next.js</a><br/>
• <a href="https://nextjs.org/learn-pages-router">Tutorial Interativo Next.js</a><br/>
• <a href="https://github.com/vercel/next.js">Repositório GitHub do Next.js</a><br/>

<h2>Deploy</h2>
A forma mais simples de deployar este projeto é continuar usando <strong>Docker</strong> em um servidor, ou explorar a
<a href="https://vercel.com/new">Plataforma Vercel</a> (a criadora do Next.js) se desejar dispensar contêineres.<br/>
Mais detalhes de deploy podem ser encontrados na
<a href="https://nextjs.org/docs/pages/building-your-application/deploying">Documentação de Deploy do Next.js</a>.<br/>
