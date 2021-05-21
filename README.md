<h1>Gnome Town</h1>
Live Demo! <a href="https://axagnometown.netlify.app/">https://axagnometown.netlify.app/</a>
<p>Un un buscador rápido de la ciudad Brastlewark, utilizando tecnologias como, redux, axios y tailwind</p>
<p>I would make more but, for a first MVP its enough.</p>
<h4>Features</4>
<ul>
<li>
Text prediction based on name, work, friends or id (Tab to input prediction or arrow keys ↕️ to change prediction)
</li>
<li>
Optimized images, with lazy load and cache. 
</li>
<li>
Personal favorite list
<li>
Mobile friendly
</li>
</ul>
<h2>Installation</h2>
<p>como cualquier otro repositorio, </p>
<code> npm install </code> and <code> npm run start </code>
<h3>Testing</h3>
<p><code>npm run test </code>
<br>
Included unitTesting to check the api conection, the reducers and the actions.
</p>
<h3>Directories</h3>
<code>
src (main dir) 
|_ __mocks__ (mocks dir to use with test)
|_ __test__ (test dir)
|_ actions (redux actions dir, actions of the app)
|_ reducers (redux reducers dir)
|_ initialState (initial state of the data when app load.)
|_ modules (main dir of code written)
     |_ components (features dir of the app, small scripts or parts of containers)
     |_ containers (components of the app)
</code>
