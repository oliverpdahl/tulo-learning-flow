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
kf_content.contents.create(
  text: %(The kickflip is the hardest of the basic skateboarding tricks and one of the most popular skateboarding tricks to learn. Learning to kickflip first, before learning other skateboarding flip tricks, will help you in the long run. If you are brand new to skateboarding, you'll first need to learn how to ollie.
  A kickflip starts with an ollie, but you flick the board with your foot to make it spin underneath you while in the air. In a clean kickflip, the skater kicks the board with the top and side of his front foot, the skateboard flips and spins over at least once, and the skateboarder lands on the skateboard comfortably, wheels down, and rides away.),
  img_link: 'https://www.liveabout.com/thmb/kOuG5gCcu_ftF6w0oh4u8E_AS9M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-98877349-5c85ec8946e0fb00010f1101.jpg',
  img_creator: 'Hal Bergman',
  img_resource: 'GettyImages',
  creator: 'Steve Cave',
  link: 'https://www.skateboardtricksforbeginners.com/how-to-kickflip',
  resource: 'liveabout.com',
  type: 'Passage'
)
kf_content.contents.create(
  link: 'https://www.youtube.com/watch?v=YOf0XeI7KzU',
  creator: 'Aaron Kyro',
  resource: 'Braille Skateboarding',
  type: 'Video'
)
ollie = kf.nodes.create(title: 'Learn to Ollie', complete: true)
ollie_content = ollie.content_blocks.create
ollie_content.contents.create(
  text: %{The ollie (invented by Alan "Ollie" Gelfand in 1977) is the first trick that most skateboarders learn. It's a leap into the air on the skateboard with the skater's feet still on the board, even in mid-air. The ollie is a great technique for jumping over obstacles and impressing friends even as you're still learning the basics. Learning to ollie makes sense, as the ollie is the foundation of almost all flatland and park skateboarding tricks. Once you learn how to ollie, you’ll be able to move on to learning all kinds of other skateboarding tricks or inventing your own.},
  img_link: 'https://www.liveabout.com/thmb/WgWcAwnniC0GklU8FBzBGCcvJ3w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-641276018-591dc0935f9b58f4c04a8452.jpg',
  img_creator: 'Tony Anderson',
  img_resource: 'GettyImages',
  link: 'https://www.liveabout.com/thmb/WgWcAwnniC0GklU8FBzBGCcvJ3w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-641276018-591dc0935f9b58f4c04a8452.jpg',
  creator: 'Steve Cave',
  resource: 'liveabout.com',
  type: 'Passage'
)
ollie_content.contents.create(
  link: 'https://cdn.jwplayer.com/videos/L4prgIC5-qP58AAan.mp4',
  creator: 'Nate Cohen',
  resource: 'HowCast',
  type: 'Video'
)
fssi = kf.nodes.create(title: 'Learn to Front Side Shove It')
hf = kf.nodes.create(title: 'Learn to Heelflip')

Path.create(title: 'Learn Excell')
Path.create(complete: true, title: 'Learn Compound Fractions')
