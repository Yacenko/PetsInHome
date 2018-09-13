# PetsInHome

C:\Program Files\MongoDB\Server\3.6\bin

Clear tables;
    - mongo
    - use animals;
    - db.zoo.delete({})
    - exit

Import database
    create db
    ./mongoimport --db animals --collection zoo --file D:\repos\PetsInHome\mongo\zoo.json
    ./mongoimport --db animals --collection text --file D:\repos\PetsInHome\mongo\text.json
    ./mongoimport --db animals --collection questions --file D:\repos\PetsInHome\mongo\questions.json
    ./mongoimport --db animals --collection translations --file D:\repos\PetsInHome\mongo\translations.json

Export database
    ./mongoexport --db animals --collection zoo --out D:\repos\PetsInHome\mongo\zoo.json
    ./mongoexport --db animals --collection text --out D:\repos\PetsInHome\mongo\text.json
    ./mongoexport --db animals --collection questions --out D:\repos\PetsInHome\mongo\questions.json
    ./mongoexport --db animals --collection translations --out D:\repos\PetsInHome\mongo\translations.json
    
mongo start: sudo service mongod start