# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ollie = Completable.create(title: 'Learn to Ollie', complete: true)
ollie.content_blocks.build(text: 'The ollie (invented by Alan "Ollie" Gelfand in 1977) is the first trick that most skateboarders learn. It\'s a leap into the air on the skateboard with the skater\'s feet still on the board, even in mid-air. The ollie is a great technique for jumping over obstacles and impressing friends even as you\'re still learning the basics. Learning to ollie makes sense, as the ollie is the foundation of almost all flatland and park skateboarding tricks. Once you learn how to ollie, you’ll be able to move on to learning all kinds of other skateboarding tricks or inventing your own.').save
Completable.create(title: 'Learn Excell')
Completable.create(complete: true, title: 'Learn Compound Fractions')