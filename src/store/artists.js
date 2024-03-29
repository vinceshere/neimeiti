const artists = [
  { 'name': 'Amanda Bynes', 'slug': 'amanda-bynes' },
  { 'name': 'Barbra Streisand', 'slug': 'barbra-streisand' },
  { 'name': 'Anna Gunn', 'slug': 'anna-gunn' },
  { 'name': 'Bella Thorne', 'slug': 'bella-thorne' },
  { 'name': 'Alexa Chung', 'slug': 'alexa-chung' },
  { 'name': 'Arnold Schwarzenegger', 'slug': 'arnold-schwarzenegger' },
  { 'name': 'Philip Seymour Hoffman', 'slug': 'philip-seymour-hoffman' },
  { 'name': 'Jennifer Love Hewitt', 'slug': 'jennifer-love-hewitt' },
  { 'name': 'Aamir Khan', 'slug': 'aamir-khan' },
  { 'name': 'Ashley Tisdale', 'slug': 'ashley-tisdale' },
  { 'name': 'Antonio Banderas', 'slug': 'antonio-banderas' },
  { 'name': 'Alec Baldwin', 'slug': 'alec-baldwin' },
  { 'name': 'Al Pacino', 'slug': 'al-pacino' },
  { 'name': 'Toby Keith', 'slug': 'toby-keith' },
  { 'name': 'Audrey Hepburn', 'slug': 'audrey-hepburn' },
  { 'name': 'Jane Fonda', 'slug': 'jane-fonda' },
  { 'name': 'Donald Trump', 'slug': 'donald-trump' },
  { 'name': 'Jennifer Aniston', 'slug': 'jennifer-aniston' },
  { 'name': 'Bethenny Frankel', 'slug': 'bethenny-frankel' },
  { 'name': 'Morgan Freeman', 'slug': 'morgan-freeman' },
  { 'name': 'Tobey Maguire', 'slug': 'tobey-maguire' },
  { 'name': 'Jake Gyllenhaal', 'slug': 'jake-gyllenhaal' },
  { 'name': 'Ben Affleck', 'slug': 'ben-affleck' },
  { 'name': 'Jennifer Garner', 'slug': 'jennifer-garner' },
  { 'name': 'Jessica Alba', 'slug': 'jessica-alba' },
  { 'name': 'Nina Dobrev', 'slug': 'nina-dobrev' },
  { 'name': 'Gabriel Macht', 'slug': 'gabriel-macht' },
  { 'name': 'Usher', 'slug': 'usher' },
  { 'name': 'Jason Schwartzman', 'slug': 'jason-schwartzman' },
  { 'name': 'Anne Hathaway', 'slug': 'anne-hathaway' },
  { 'name': 'Mila Kunis', 'slug': 'mila-kunis' },
  { 'name': 'Jeff Gordon', 'slug': 'jeff-gordon' },
  { 'name': 'Ashley Judd', 'slug': 'ashley-judd' },
  { 'name': 'Tom Hardy', 'slug': 'tom-hardy' },
  { 'name': 'Ariana Grande', 'slug': 'ariana-grande' },
  { 'name': 'Natalie Portman', 'slug': 'natalie-portman' },
  { 'name': 'Jeff Bridges', 'slug': 'jeff-bridges' },
  { 'name': 'Paul Rudd', 'slug': 'paul-rudd' },
  { 'name': 'Paul Newman', 'slug': 'paul-newman' },
  { 'name': 'Tom Hiddleston', 'slug': 'tom-hiddleston' },
  { 'name': 'Julia Louis-Dreyfus', 'slug': 'julia-louis-dreyfus' },
  { 'name': 'Paris Hilton', 'slug': 'paris-hilton' },
  { 'name': 'James Dean', 'slug': 'james-dean' },
  { 'name': 'Owen Wilson', 'slug': 'owen-wilson' },
  { 'name': 'Heidi Klum', 'slug': 'heidi-klum' },
  { 'name': 'John Travolta', 'slug': 'john-travolta' },
  { 'name': 'Perrie Edwards', 'slug': 'perrie-edwards' },
  { 'name': 'Kate Upton', 'slug': 'kate-upton' },
  { 'name': 'Tyler Perry', 'slug': 'tyler-perry' },
  { 'name': 'Miley Cyrus', 'slug': 'miley-cyrus' },
  { 'name': 'James Caviezel', 'slug': 'james-caviezel' },
  { 'name': 'David Beckham', 'slug': 'david-beckham' },
  { 'name': 'Paul McCartney', 'slug': 'paul-mccartney' },
  { 'name': 'John Malkovich', 'slug': 'john-malkovich' },
  { 'name': 'Angelina Jolie', 'slug': 'angelina-jolie' },
  { 'name': 'Dwight Howard', 'slug': 'dwight-howard' },
  { 'name': 'Jaden Smith', 'slug': 'jaden-smith' },
  { 'name': 'Amanda Seyfried', 'slug': 'amanda-seyfried' },
  { 'name': 'Natalya Rudakova', 'slug': 'natalya-rudakova' },
  { 'name': 'Harry Styles', 'slug': 'harry-styles' },
  { 'name': 'Elton John', 'slug': 'elton-john' },
  { 'name': 'Emma Thompson', 'slug': 'emma-thompson' },
  { 'name': 'Hugh Jackman', 'slug': 'hugh-jackman' },
  { 'name': 'Jerry Seinfeld', 'slug': 'jerry-seinfeld' },
  { 'name': 'Brendan Fraser', 'slug': 'brendan-fraser' },
  { 'name': 'Beyonce Knowles', 'slug': 'beyonce-knowles' },
  { 'name': 'Ed Westwick', 'slug': 'ed-westwick' },
  { 'name': 'Adriana Lima', 'slug': 'adriana-lima' },
  { 'name': 'Neil Diamond', 'slug': 'neil-diamond' },
  { 'name': 'Eminem', 'slug': 'eminem' },
  { 'name': 'Johnny Depp', 'slug': 'johnny-depp' },
  { 'name': 'Jon Stewart', 'slug': 'jon-stewart' },
  { 'name': 'Jim Carrey', 'slug': 'jim-carrey' },
  { 'name': 'Catherine Zeta-Jones', 'slug': 'catherine-zeta-jones' },
  { 'name': 'Howard Stern', 'slug': 'howard-stern' },
  { 'name': 'Harrison Ford', 'slug': 'harrison-ford' },
  { 'name': 'Peter Jackson', 'slug': 'peter-jackson' },
  { 'name': 'Chuck Lorre', 'slug': 'chuck-lorre' },
  { 'name': 'Alex Rodriguez', 'slug': 'alex-rodriguez' },
  { 'name': 'Elvis Presley', 'slug': 'elvis-presley' },
  { 'name': 'Jean-Claude Van Damme', 'slug': 'jean-claude-van-damme' },
  { 'name': 'Tiger Woods', 'slug': 'tiger-woods' },
  { 'name': 'Clint Eastwood', 'slug': 'clint-eastwood' },
  { 'name': 'Katharine Hepburn', 'slug': 'katharine-hepburn' },
  { 'name': 'Tommy Lee Jones', 'slug': 'tommy-lee-jones' },
  { 'name': 'Daniel Radcliffe', 'slug': 'daniel-radcliffe' },
  { 'name': 'Naomi Watts', 'slug': 'naomi-watts' },
  { 'name': 'Chace Crawford', 'slug': 'chace-crawford' },
  { 'name': 'Halle Berry', 'slug': 'halle-berry' },
  { 'name': 'Courteney Cox', 'slug': 'courteney-cox' },
  { 'name': 'Kate Moss', 'slug': 'kate-moss' },
  { 'name': 'Bill Murray', 'slug': 'bill-murray' },
  { 'name': 'Orlando Bloom', 'slug': 'orlando-bloom' },
  { 'name': 'Famke Janssen', 'slug': 'famke-janssen' },
  { 'name': 'Charlie Hunnam', 'slug': 'charlie-hunnam' },
  { 'name': 'Bruce Willis', 'slug': 'bruce-willis' },
  { 'name': 'Katherine Heigl', 'slug': 'katherine-heigl' },
  { 'name': 'Freddie Mercury', 'slug': 'freddie-mercury' },
  { 'name': 'Danica Patrick', 'slug': 'danica-patrick' },
  { 'name': 'Bob Hope', 'slug': 'bob-hope' },
  { 'name': 'Drew Barrymore', 'slug': 'drew-barrymore' },
  { 'name': 'Charles Chaplin', 'slug': 'charles-chaplin' },
  { 'name': 'Bob Dylan', 'slug': 'bob-dylan' },
  { 'name': 'Julianne Hough', 'slug': 'julianne-hough' },
  { 'name': 'Golshifteh Farahani', 'slug': 'golshifteh-farahani' },
  { 'name': 'Brad Pitt', 'slug': 'brad-pitt' },
  { 'name': 'Channing Tatum', 'slug': 'channing-tatum' },
  { 'name': 'Charlie Sheen', 'slug': 'charlie-sheen' },
  { 'name': 'Christopher Nolan', 'slug': 'christopher-nolan' },
  { 'name': 'George Lucas', 'slug': 'george-lucas' },
  { 'name': 'Bill Cosby', 'slug': 'bill-cosby' },
  { 'name': 'Carrie Underwood', 'slug': 'carrie-underwood' },
  { 'name': 'Julia Roberts', 'slug': 'julia-roberts' },
  { 'name': 'George Pal', 'slug': 'george-pal' },
  { 'name': 'Ben Stiller', 'slug': 'ben-stiller' },
  { 'name': 'David Letterman', 'slug': 'david-letterman' },
  { 'name': 'Britney Spears', 'slug': 'britney-spears' },
  { 'name': 'Franco Nero', 'slug': 'franco-nero' },
  { 'name': 'Jennifer Lopez', 'slug': 'jennifer-lopez' },
  { 'name': 'Brad Paisley', 'slug': 'brad-paisley' },
  { 'name': 'Pierce Brosnan', 'slug': 'pierce-brosnan' },
  { 'name': 'Jay-Z', 'slug': 'jay-z' },
  { 'name': 'Jeff Dunham', 'slug': 'jeff-dunham' },
  { 'name': 'Bob Marley', 'slug': 'bob-marley' },
  { 'name': 'Cory Monteith', 'slug': 'cory-monteith' },
  { 'name': 'George Clooney', 'slug': 'george-clooney' },
  { 'name': 'Jason Statham', 'slug': 'jason-statham' },
  { 'name': 'Kate Winslet', 'slug': 'kate-winslet' },
  { 'name': 'Jackie Chan', 'slug': 'jackie-chan' },
  { 'name': 'Jason Bateman', 'slug': 'jason-bateman' },
  { 'name': 'Jason Biggs', 'slug': 'jason-biggs' },
  { 'name': 'Justin Bieber', 'slug': 'justin-bieber' },
  { 'name': 'Kamal Hassan', 'slug': 'kamal-hassan' },
  { 'name': 'Sylvester Stallone', 'slug': 'sylvester-stallone' },
  { 'name': 'Ethan Hawke', 'slug': 'ethan-hawke' },
  { 'name': 'Patricia Arquette', 'slug': 'patricia-arquette' },
  { 'name': 'James Earl Jones', 'slug': 'james-earl-jones' },
  { 'name': 'Justin Theroux', 'slug': 'justin-theroux' },
  { 'name': 'Justin Timberlake', 'slug': 'justin-timberlake' },
  { 'name': 'Glenn Beck', 'slug': 'glenn-beck' },
  { 'name': 'Jennifer Lawrence', 'slug': 'jennifer-lawrence' },
  { 'name': 'Christina Aguilera', 'slug': 'christina-aguilera' },
  { 'name': 'Cara Delevingne', 'slug': 'cara-delevingne' },
  { 'name': 'Teri Hatcher', 'slug': 'teri-hatcher' },
  { 'name': 'Danny Trejo', 'slug': 'danny-trejo' },
  { 'name': 'Jim Parsons', 'slug': 'jim-parsons' },
  { 'name': 'Chris Hemsworth', 'slug': 'chris-hemsworth' },
  { 'name': 'Mickey Rourke', 'slug': 'mickey-rourke' },
  { 'name': 'Pink', 'slug': 'pink' },
  { 'name': 'Taylor Swift', 'slug': 'taylor-swift' },
  { 'name': 'Dustin Hoffman', 'slug': 'dustin-hoffman' },
  { 'name': 'Cameron Diaz', 'slug': 'cameron-diaz' },
  { 'name': 'Coco Chanel', 'slug': 'coco-chanel' },
  { 'name': 'Jessica Chastain', 'slug': 'jessica-chastain' },
  { 'name': 'Dave Matthews', 'slug': 'dave-matthews' },
  { 'name': 'Tim McGraw', 'slug': 'tim-mcgraw' },
  { 'name': 'Eva Longoria', 'slug': 'eva-longoria' },
  { 'name': 'Dwayne Wade', 'slug': 'dwayne-wade' },
  { 'name': 'Emma Stone', 'slug': 'emma-stone' },
  { 'name': 'Matthew McConaughey', 'slug': 'matthew-mcconaughey' },
  { 'name': 'Nick Carter', 'slug': 'nick-carter' },
  { 'name': 'Vince Vaughn', 'slug': 'vince-vaughn' },
  { 'name': 'Jeananne Goossen', 'slug': 'jeananne-goossen' },
  { 'name': 'LeBron James', 'slug': 'lebron-james' },
  { 'name': 'Ron Jeremy', 'slug': 'ron-jeremy' },
  { 'name': 'Robert Pattinson', 'slug': 'robert-pattinson' },
  { 'name': 'Seann William Scott', 'slug': 'seann-william-scott' },
  { 'name': 'Kourtney Kardashian', 'slug': 'kourtney-kardashian' },
  { 'name': 'Kevin Garnett', 'slug': 'kevin-garnett' },
  { 'name': 'Jessica Biel', 'slug': 'jessica-biel' },
  { 'name': 'Zach Galifianakis', 'slug': 'zach-galifianakis' },
  { 'name': 'David Copperfield', 'slug': 'david-copperfield' },
  { 'name': 'Kris Jenner', 'slug': 'kris-jenner' },
  { 'name': 'Rita Ora', 'slug': 'rita-ora' },
  { 'name': 'Claire Danes', 'slug': 'claire-danes' },
  { 'name': 'Keanu Reeves', 'slug': 'keanu-reeves' },
  { 'name': 'Emily Mortimer', 'slug': 'emily-mortimer' },
  { 'name': 'Zooey Deschanel', 'slug': 'zooey-deschanel' },
  { 'name': 'Keith Richards', 'slug': 'keith-richards' },
  { 'name': 'Zac Efron', 'slug': 'zac-efron' },
  { 'name': 'Keira Knightley', 'slug': 'keira-knightley' },
  { 'name': 'Ellen DeGeneres', 'slug': 'ellen-degeneres' },
  { 'name': 'Ryan Reynolds', 'slug': 'ryan-reynolds' },
  { 'name': 'Sofia Vergara', 'slug': 'sofia-vergara' },
  { 'name': 'Katy Perry', 'slug': 'katy-perry' },
  { 'name': 'Sigourney Weaver', 'slug': 'sigourney-weaver' },
  { 'name': 'Russell Crowe', 'slug': 'russell-crowe' },
  { 'name': 'Nicole Richie', 'slug': 'nicole-richie' },
  { 'name': 'Roger Moore', 'slug': 'roger-moore' },
  { 'name': 'Scarlett Johansson', 'slug': 'scarlett-johansson' },
  { 'name': 'Will Ferrell', 'slug': 'will-ferrell' },
  { 'name': 'Sean Combs', 'slug': 'sean-combs' },
  { 'name': 'Sandra Bullock', 'slug': 'sandra-bullock' },
  { 'name': 'Shia LaBeouf', 'slug': 'shia-labeouf' },
  { 'name': 'Kim Kardashian', 'slug': 'kim-kardashian' },
  { 'name': 'Derek Hough', 'slug': 'derek-hough' },
  { 'name': 'Roman Coppola', 'slug': 'roman-coppola' },
  { 'name': 'Michael Douglas', 'slug': 'michael-douglas' },
  { 'name': 'Ryan Seacrest', 'slug': 'ryan-seacrest' },
  { 'name': 'Selena Gomez', 'slug': 'selena-gomez' },
  { 'name': 'Richard Gere', 'slug': 'richard-gere' },
  { 'name': 'Reese Witherspoon', 'slug': 'reese-witherspoon' },
  { 'name': 'Matt Damon', 'slug': 'matt-damon' },
  { 'name': 'Hugh Laurie', 'slug': 'hugh-laurie' },
  { 'name': 'Kenny Chesney', 'slug': 'kenny-chesney' },
  { 'name': 'Bruce Lee', 'slug': 'bruce-lee' },
  { 'name': 'Kristen Bell', 'slug': 'kristen-bell' },
  { 'name': 'Sienna Miller', 'slug': 'sienna-miller' },
  { 'name': 'Leona Lewis', 'slug': 'leona-lewis' },
  { 'name': 'Maria Sharapova', 'slug': 'maria-sharapova' },
  { 'name': 'Amitabh Bachchan', 'slug': 'amitabh-bachchan' },
  { 'name': 'Sean Connery', 'slug': 'sean-connery' },
  { 'name': 'Rihanna', 'slug': 'rihanna' },
  { 'name': 'Robin Williams', 'slug': 'robin-williams' },
  { 'name': 'Marilyn Monroe', 'slug': 'marilyn-monroe' },
  { 'name': 'Marisa Tomei', 'slug': 'marisa-tomei' },
  { 'name': 'Stephanie Meyer', 'slug': 'stephanie-meyer' },
  { 'name': 'Robert Redford', 'slug': 'robert-redford' },
  { 'name': 'Liam Neeson', 'slug': 'liam-neeson' },
  { 'name': 'Rush Limbaugh', 'slug': 'rush-limbaugh' },
  { 'name': 'Mark Burnett', 'slug': 'mark-burnett' },
  { 'name': 'Viola Davis', 'slug': 'viola-davis' },
  { 'name': 'Rachael Ray', 'slug': 'rachael-ray' },
  { 'name': 'Robert Downey Jr.', 'slug': 'robert-downey-jr.' },
  { 'name': 'Madonna', 'slug': 'madonna' },
  { 'name': 'Serena Williams', 'slug': 'serena-williams' },
  { 'name': 'Zayn Malik', 'slug': 'zayn-malik' },
  { 'name': 'Nicole Kidman', 'slug': 'nicole-kidman' },
  { 'name': 'Kobe Bryant', 'slug': 'kobe-bryant' },
  { 'name': 'Miranda Kerr', 'slug': 'miranda-kerr' },
  { 'name': 'Nicolas Cage', 'slug': 'nicolas-cage' },
  { 'name': 'Lady Gaga', 'slug': 'lady-gaga' },
  { 'name': 'Ron Howard', 'slug': 'ron-howard' },
  { 'name': 'Michael Jordan', 'slug': 'michael-jordan' },
  { 'name': 'Rachel Zoe', 'slug': 'rachel-zoe' },
  { 'name': 'Lil Wayne', 'slug': 'lil-wayne' },
  { 'name': 'Lucas Black', 'slug': 'lucas-black' },
  { 'name': 'Sean Penn', 'slug': 'sean-penn' },
  { 'name': 'Larry David', 'slug': 'larry-david' },
  { 'name': 'Victoria Beckham', 'slug': 'victoria-beckham' },
  { 'name': 'Mel Gibson', 'slug': 'mel-gibson' },
  { 'name': 'Melissa Joan Hart', 'slug': 'melissa-joan-hart' },
  { 'name': 'Steve Carell', 'slug': 'steve-carell' },
  { 'name': 'Meryl Streep', 'slug': 'meryl-streep' },
  { 'name': 'Kris Humphries', 'slug': 'kris-humphries' },
  { 'name': 'Snooki', 'slug': 'snooki' },
  { 'name': 'Scott Disick', 'slug': 'scott-disick' },
  { 'name': 'Jet Li', 'slug': 'jet-li' },
  { 'name': 'Mark Harmon', 'slug': 'mark-harmon' },
  { 'name': 'Rowan Atkinson', 'slug': 'rowan-atkinson' },
  { 'name': 'Sarah Jessica Parker', 'slug': 'sarah-jessica-parker' },
  { 'name': 'Larry the Cable Guy', 'slug': 'larry-the-cable-guy' },
  { 'name': 'Steven Spielberg', 'slug': 'steven-spielberg' },
  { 'name': 'Tom Cruise', 'slug': 'tom-cruise' },
  { 'name': 'Stephen Hawking', 'slug': 'stephen-hawking' },
  { 'name': 'Lindsay Lohan', 'slug': 'lindsay-lohan' },
  { 'name': 'Vin Diesel', 'slug': 'vin-diesel' },
  { 'name': 'Mary-Louise Parker', 'slug': 'mary-louise-parker' },
  { 'name': 'Jack Black', 'slug': 'jack-black' },
  { 'name': 'Sarah Shahi', 'slug': 'sarah-shahi' },
  { 'name': 'Sydney Liebes', 'slug': 'sydney-liebes' },
  { 'name': 'Bruce Jenner', 'slug': 'bruce-jenner' },
  { 'name': 'William Shatner', 'slug': 'william-shatner' },
  { 'name': 'Kathleen Turner', 'slug': 'kathleen-turner' },
  { 'name': 'Lamar Odom', 'slug': 'lamar-odom' },
  { 'name': 'Lea Michele', 'slug': 'lea-michele' },
  { 'name': 'Liam Hemsworth', 'slug': 'liam-hemsworth' },
  { 'name': 'Vanilla Ice', 'slug': 'vanilla-ice' },
  { 'name': 'Bradley Cooper', 'slug': 'bradley-cooper' },
  { 'name': 'Tina Fey', 'slug': 'tina-fey' },
  { 'name': 'Wolfgang Puck', 'slug': 'wolfgang-puck' },
  { 'name': 'Jason London', 'slug': 'jason-london' },
  { 'name': 'James Cameron', 'slug': 'james-cameron' },
  { 'name': 'John Bon Jovi', 'slug': 'john-bon-jovi' },
  { 'name': 'Wesley Snipes', 'slug': 'wesley-snipes' },
  { 'name': 'Will Smith', 'slug': 'will-smith' },
  { 'name': 'Martin Sheen', 'slug': 'martin-sheen' },
  { 'name': 'Phil McGraw', 'slug': 'phil-mcgraw' },
  { 'name': 'Emeril Lagasse', 'slug': 'emeril-lagasse' },
  { 'name': 'Kelly Lynch', 'slug': 'kelly-lynch' },
  { 'name': 'Eddie Murphy', 'slug': 'eddie-murphy' },
  { 'name': 'Jeff Goldblum', 'slug': 'jeff-goldblum' },
  { 'name': 'Tom Hanks', 'slug': 'tom-hanks' },
  { 'name': 'Derek Jeter', 'slug': 'derek-jeter' },
  { 'name': 'George Shelley', 'slug': 'george-shelley' },
  { 'name': 'Seth Rogen', 'slug': 'seth-rogen' },
  { 'name': 'Gemma Arterton', 'slug': 'gemma-arterton' },
  { 'name': 'Stacey Dash', 'slug': 'stacey-dash' },
  { 'name': 'Kristen Stewart', 'slug': 'kristen-stewart' },
  { 'name': 'Shah Rukh Khan', 'slug': 'shah-rukh-khan' },
  { 'name': 'Christopher Waltz', 'slug': 'christopher-waltz' },
  { 'name': 'Peter Billingsley', 'slug': 'peter-billingsley' },
  { 'name': 'Ian Somerhalder', 'slug': 'ian-somerhalder' },
  { 'name': '50 Cent', 'slug': '50-cent' },
  { 'name': 'Robin Thicke', 'slug': 'robin-thicke' },
  { 'name': 'Adam Sandler', 'slug': 'adam-sandler' },
  { 'name': 'Mark Wahlberg', 'slug': 'mark-wahlberg' },
  { 'name': 'Jack Nicholson', 'slug': 'jack-nicholson' },
  { 'name': 'Kanye West', 'slug': 'kanye-west' },
  { 'name': 'Laura Whitmore', 'slug': 'laura-whitmore' },
  { 'name': 'Dwayne Johnson', 'slug': 'dwayne-johnson' },
  { 'name': 'Chris Rock', 'slug': 'chris-rock' },
  { 'name': 'Christian Bale', 'slug': 'christian-bale' },
  { 'name': 'Jay Leno', 'slug': 'jay-leno' },
  { 'name': 'Denzel Washington', 'slug': 'denzel-washington' },
  { 'name': 'Jeremy Renner', 'slug': 'jeremy-renner' },
  { 'name': 'Drake', 'slug': 'drake' },
  { 'name': 'Vincent D\'Onofrio', 'slug': 'vincent-donofrio' },
  { 'name': 'Samuel L. Jackson', 'slug': 'samuel-l.-jackson' },
  { 'name': 'Vanessa Hudgens', 'slug': 'vanessa-hudgens' },
  { 'name': 'Demi Lovato', 'slug': 'demi-lovato' },
  { 'name': 'Macaulay Culkin', 'slug': 'macaulay-culkin' },
  { 'name': 'Robert De Niro', 'slug': 'robert-de-niro' }
]

export default artists
