<h1>Gnome Town</h1>
Live Demo! <a href="https://axagnometown.netlify.app/">https://axagnometown.netlify.app/</a>
<p>A quick search engine of the city Brastlewark, using technologies like, redux, axios and tailwind</p>
<p>Its just a MVP but I would love to be able to do more things, like cache state of data.</p>
<h4>Features</h4>
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
<p>Like any other repo <code> npm install </code>  and  <code> npm run start </code> to start the development envoriment in localhost:3000</p>

<h3>Testing</h3>
<p><code>npm run test </code>
<br>
I made some basics unitTesting to check the api conection, the reducers and the actions.
</p>
<h3>Directories</h3>
 
```
src (main dir) 
|_ __mocks__ (mocks dir to use with test)
|_ __test__ (test dir)
|_ actions (redux actions dir, actions of the app)
|_ reducers (redux reducers dir)
|_ initialState (initial state of the data when app load.)
|_ modules (main dir of code written)
     |_ components (features dir of the app, small scripts or parts of containers)
     |_ containers (components of the app)
```
