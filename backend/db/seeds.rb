# frozen_string_literal: true

# #Compound Fractions
cf = Path.create(complete: true, title: 'Learn Compound Fractions')

# DEFINITION
defin = cf.nodes.create(title: 'Definition', complete: true)
defin_content = defin.content_blocks.create
defin_content.contents.create(
  text: %(A compound fraction is a fraction of a fraction, or any number of fractions connected with the word of corresponding to multiplication of fractions. To reduce a compound fraction to a simple fraction, just carry out the multiplication),
  img_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Cake_quarters.svg/440px-Cake_quarters.svg.png',
  img_resource: 'Wikipedia',
  link: %(https://en.wikipedia.org/wiki/Fraction#'Complex'_and_'compound'_fractions'),
  resource: 'Wikipedia',
  type: 'Passage'
)
defin_content.contents.create(
  text: %(Compound Fraction is also referred as mixed fraction. In compound fraction, part of numerator or denominator contains fraction or both formed of fractional expressions. It is also called as fractions of fractions, corresponding to multiplication of fractions.),
  link: %(https://www.easycalculation.com/maths-dictionary/compound_fraction.html),
  resource: 'EasyCalculation.com',
  type: 'Passage'
)

# MULTIPLY
mult = cf.nodes.create(title: 'Multiply', complete: true)
mult_content = mult.content_blocks.create
mult_content.contents.create(
  link: %(https://youtu.be/RPhaidW0dmY),
  creator: 'Sal Khan',
  resource: 'Khan Academy',
  type: 'Video'
)

## KICKFLIP
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

# OLLIE
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
  link: 'https://www.youtube.com/watch?v=arDVW-aWWys',
  resource: 'VLSkate',
  type: 'Video'
)

# FRONTSIDE SHOVE-IT
fssi = kf.nodes.create(title: 'Learn to Frontside Shove It')
fssi_content = fssi.content_blocks.create
fssi_content.contents.create(
  link: 'https://youtu.be/rbpllQ2bGAE',
  resource: 'Braille Skateboarding',
  type: 'Video'
)
fssi_content.contents.create(
  text: %(The Frontside Pop Shove It is achieved by combining an Ollie and a quick forward-scoop motion of the back-foot to make the board spin 180 degrees, all while remaining neutral in the air.
For the first practice step, you won’t be standing on the board. Stand with your board in front of you and simply place your back foot on the tail, in the proper Frontside Pop Shove It back foot position. With your back foot in the proper position and your front foot standing on solid ground, practice popping straight down.
Give the board a slight nudge forward as you pop it down with your back foot. When done properly, this will cause the board to turn 180-degrees as it would for the Frontside Pop Shove It. You’re not moving, only the board is doing the Front Shove motion.
It’s important to keep the board flat when doing this practice step. This will prevent you from landing primo or having the board flip when you start landing Frontside Pop Shove Its. Play around with the foot position, the downwards pop, and the forward nudge of the back foot until your board is consistently staying flat and doing the full frontside 180-degree rotation.
  ),
  img_link: 'https://foatc2b41sq2v8h3f3enj931-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/fs-pop-shove-foot-position1.png',
  img_creator: '',
  img_resource: 'Braille Skateboarding',
  link: 'https://brailleskateboarding.com/how-to-frontside-pop-shove-it/',
  creator: '',
  resource: 'Braille Skateboarding',
  type: 'Passage'
)
fssi_content.contents.create(
  text: %{A Shove-it (or shuvit) is a skateboarding trick where the skateboarder makes the board spin 180 degrees (or more) without the tail of the board hitting the ground under their feet. There are many variations of the shove-it but they all follow the same principle: The skateboarder's lead foot remains in one spot, while the back foot performs the "shove". The pop shove-it was originally called a "Ty hop", named after Ty Page.},
  img_link: 'https://www.wikihow.com/images/thumb/b/b3/Switch-Frontside-Shove-It-Step-1.jpg/v4-460px-Switch-Frontside-Shove-It-Step-1.jpg.webp',
  img_creator: '',
  img_resource: 'wikiHow',
  link: 'https://en.wikipedia.org/wiki/Shove-it',
  creator: '',
  resource: 'Wikipedia',
  type: 'Passage'
)

# HEELFLIP
hf = kf.nodes.create(title: 'Learn to Heelflip')
hf_content = hf.content_blocks.create
hf_content.contents.create(
  link: 'https://www.youtube.com/watch?v=TqJTxROm7rg',
  creator: 'Spencer Nuzzi',
  resource: 'RIDE',
  type: 'Video'
)
hf_content.contents.create(
  link: 'https://www.youtube.com/watch?v=Skl58iiJXqQ',
  creator: 'Jonny Giger',
  type: 'Video'
)

## EXCEL
excel = Path.create(title: 'Learn Excel')

# FORMULAS AND FUNCTIONS
ff = excel.nodes.create(title: 'Formulas and Functions')
ff_content = ff.content_blocks.create
ff_content.contents.create(
  link: 'https://www.youtube.com/watch?v=Jl0Qk63z2ZY',
  creator: 'Kevin Stratvert',
  type: 'Video'
)

# SYNTAX
syntax = excel.nodes.create(title: 'Syntax')
syntax_content = syntax.content_blocks.create
syntax_content.contents.create(
  link: 'https://vimeo.com/87690865',
  resource: 'CUBoulderComputing',
  type: 'Video'
)

# SHORTCUTS
shortcuts = excel.nodes.create(title: 'Shortcuts')
shortcuts_content = shortcuts.content_blocks.create
shortcuts_content.contents.create(
  link: 'https://dai.ly/x5htfm4',
  resource: 'Mister Teeser',
  type: 'Video'
)
