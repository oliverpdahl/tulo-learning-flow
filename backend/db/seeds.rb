# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
kf = Path.create(title: 'Learn to Kickflip')
kf_content = kf.content_blocks.create
kf_content.contents.create(text: %{The ollie (invented by Alan "Ollie" Gelfand in 1977) is the first trick that most skateboarders learn. It's a leap into the air on the skateboard with the skater's feet still on the board, even in mid-air. The ollie is a great technique for jumping over obstacles and impressing friends even as you're still learning the basics. Learning to ollie makes sense, as the ollie is the foundation of almost all flatland and park skateboarding tricks. Once you learn how to ollie, you’ll be able to move on to learning all kinds of other skateboarding tricks or inventing your own.},
                           img_link: 'https://www.liveabout.com/thmb/WgWcAwnniC0GklU8FBzBGCcvJ3w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-641276018-591dc0935f9b58f4c04a8452.jpg',
                           img_creator: 'Tony Anderson',
                           img_resource: 'GettyImages',
                           link: 'https://www.liveabout.com/how-to-ollie-on-skateboard-3002977',
                           creator: 'Steve Cave',
                           resource: 'liveabout',
                           type: 'Passage')
fssi = kf.nodes.create(title: 'Learn to Front Side Shove It')
hf = kf.nodes.create(title: 'Learn to Heelflip')
ollie = kf.nodes.create(title: 'Learn to Ollie', complete: true)
ollie_content = ollie.content_blocks.create
ollie_content.contents.create(text: %{The ollie (invented by Alan "Ollie" Gelfand in 1977) is the first trick that most skateboarders learn. It's a leap into the air on the skateboard with the skater's feet still on the board, even in mid-air. The ollie is a great technique for jumping over obstacles and impressing friends even as you're still learning the basics. Learning to ollie makes sense, as the ollie is the foundation of almost all flatland and park skateboarding tricks. Once you learn how to ollie, you’ll be able to move on to learning all kinds of other skateboarding tricks or inventing your own.},
                              link: 'https://www.liveabout.com/thmb/WgWcAwnniC0GklU8FBzBGCcvJ3w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-641276018-591dc0935f9b58f4c04a8452.jpg',
                              creator: 'Steve Cave',
                              resource: 'liveabout',
                              type: 'Passage')
Path.create(title: 'Learn Excell')
Path.create(complete: true, title: 'Learn Compound Fractions')
