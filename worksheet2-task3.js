let listOfAllKnownAuthors = []

class BookStore
{
    constructor(name, address, owner)
    {
        this._name = name;
        this._address = address;
        this._owner = owner;
        this._booksAvailable = [];
        this._totalCopiesOfAllBooks = 0
    }

    authorKnown(authorName)
    {
        var foundThem = false;
		//let authorPos;
        for (var pos = 0; pos < listOfAllKnownAuthors.length; pos++)
        {
            if (authorName === listOfAllKnownAuthors[pos])
            {
                //authorPos=pos
				foundThem = true
            }
        }
        return foundThem//should use <return authorPos;>
    }

    addBook(bookInstance, copies)
    {
        var positionOfBook = this.checkForBook(bookInstance);
        if (positionOfBook != null)
        {
             var foundBook = this._booksAvailable[positionOfBook];
             foundBook.copies += copies;
             console.log("Added " + copies + " copies of " + foundBook.book);
             listOfAllKnownAuthors.push(foundBook.book.author);
        }
        else
        {
             var bookCopies = {
                 book: bookInstance,
                 copies: copies
             };
             this._booksAvailable.push(bookCopies);
             console.log("Added " + copies + " copies of a new book: " + bookInstance);
        }

        this._totalCopiesOfAllBooks += copies;
    }

    sellBook(bookInstance, numberSold)
    {
        var positionOfBook = this.checkForBook(bookInstance);
        if (positionOfBook != null)
        {
            var foundBook = this._booksAvailable[positionOfBook];
            if (numberSold > this._booksAvailable[positionOfBook].copies)
            {
                console.log("Not enough copies of " + foundBook.book + " to sell");
            }
            else
            {
                foundBook.copies -= numberSold;
                if (foundBook.copies === 0)
                {
                    this._booksAvailable.pop(PositionOfBook);//this._booksAvailable.splice(PositionOfBook,1);
                    this._NumTitles -= 1;//this._NumTitles is never declared
                    var foundAuth = this.authorKnown(foundBook.book.author);
                    listOfAllKnownAuthors.pop(foundAuth);//listOfAllKnownAuthors.splice(foundAuth,1);
                }
                this._totalCopiesOfAllBooks -= numberSold;
                console.log("Sold " + numberSold + " copies of " + foundBook.book);
            }
        }
        else
        {
            console.log(bookInstance + " not found");
        }
    }

    checkForBook(bookInstance)
    {
        var currBookNum = 0;
		//let bookNum = -1
        while (currBookNum < this._booksAvailable.length)
        {
            if (this._booksAvailable[currBookNum].book.isTheSame(bookInstance))
            {
                return currBookNum; //bookNum=currBookNum;
            }
          /*else
            {
                return null;
            }*/
            currBookNum += 1;
        }
        /*if(bookNum==-1)
		{console.log("The book is not found")}
		else
		{console.log("The book is found")}
		*/

    }

    get name()
    {
        return this._name;
    }

    set name(newName)
    {
        this._name = newName;
    }

    get address()
    {
        return this._address;
    }

    set address(newAddress)
    {
        this._address = newAddress;
    }

    get owner()
    {
        return this._owner;
    }

    set address(newOwner)//set owner(newOwner)
    {
        this._owner = newOwner;
    }
}

class Book
{
    constructor(title, author, publicationYear, price)
    {
        this._title = title;
        this._author = author;
        this._publicationYear = publicationYear;
        this._price = price;
        /*if (this.authorKnown(this._author) === false)
        {
            listOfAllKnownAuthors.push(this._author)
        }*/
    }

    isTheSame(otherBook)
    {
        return otherBook.price === this.price;
    }

    /*authorKnown(authorName)
    {
        var foundThem = false;
        for (var pos = 0; pos < listOfAllKnownAuthors.length; pos++)
        {
            if (authorName === listOfAllKnownAuthors[pos])
            {
                foundThem = true;
            }
        }
        return foundThem;
    }*/

    get title()
    {
        return this._title;
    }

    get author()
    {
        return this._author;
    }

    get publicationYear()
    {
        return this._publicationYear;
    }

    get price()
    {
        return this._price;
    }

    toString()
    {
        return this.title + ", " + this.author + ". " + this.publicationYear + " ($" + this.price + ")";
    }
}

// Book details courtesy of Harry Potter series by J.K. Rowling
var cheapSpellBook = new Book("The idiot's guide to spells","Morlan",2005,40);
var flourishAndBlotts = new BookStore("Flourish & Blotts", "North side, Diagon Alley, London, England", "unknown");
var monsterBook = new Book("The Monster Book of Monsters", "Edwardus Lima", 1978, 40);
var monsterBookToSell = new Book("The Monster Book of Monsters", "Edwardus Lima", 1978, 40);
var spellBook = new Book("The Standard Book of Spells, Grade 4", "Miranda Goshawk", 1921, 80);
flourishAndBlotts.addBook(cheapSpellBook,1000);
flourishAndBlotts.addBook(monsterBook, 500);
flourishAndBlotts.sellBook(monsterBookToSell, 200);
flourishAndBlotts.addBook(spellBook, 40);
flourishAndBlotts.addBook(spellBook, 20);
flourishAndBlotts.sellBook(spellBook, 15);
flourishAndBlotts.addBook(monsterBookToSell, -30);
flourishAndBlotts.sellBook(monsterBookToSell, 750);

console.log("Authors known: " + listOfAllKnownAuthors);
