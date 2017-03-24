# APEX Testing Data entry

# Introduction #
One of the things I hate most is testing an APEX form, basically the data entry portion. Last year I attended KScope for the first time and saw an interesting presentation: ``Testing APEX: Removing the Boring from Testing John Scott, APEX Evangelists``.  The presentation had more complex and cool examples, I am boring, I just use node.js and nightmare.js, to help speed up my data entry and workflows. Saved me a ton of time.

# Install #
```bash
git clone https://github.com/vitodcampanelli/apex-auto-data-entry
npm install
```

# Run #

1- Run the file get_script_output.sql in the database to get the majority of the information needed for the insert.js file.

2- Edit the insert.js file according with the values you need.

3- Run the file:
```bash
node insert.js
```

# Thanks #
- [John Scott](https://twitter.com/aejes) for a great presentation.
- [Martin Giffy D'Souza](https://twitter.com/martindsouza) for asking for the code.

# Links #

[Nightmare,js](https://github.com/segmentio/nightmare)
