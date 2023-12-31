// ACTIVITY LIST

//Define activities & weather criteria for each (if desire CRUD functionality later, will need to refactor to be a model with router & controller) 
export function getActivityList () {
  return(
    [
      {name: 'Yoga', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0, recommendation: 'Take advantage of the warmth indoors to calm your mind and increase your strength.'},
      {name: 'HIIT', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Keep your heart rate up with a high-intensity interval training workout including jumping jacks, burpees & mountain climbers.'},
      {name: 'Indoor Cycling', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Stay in shape indoors with a cardiovascular workout using a stationary bike or by attending a spin class.'},
      {name: 'Cross-Training Circuit', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Create an at home circuit workout with bodyweight exercises including squats, lunges, push-ups, & planks.'},
      {name: 'Indoor Dance', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Embrace the rain and have fun. Put on some lively music and dance in your backyard or at a covered outdoor space'},
      {name: 'Indoor Rock Climbing', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: 40, maxPrecip: 0.5, minPrecip: 0.02, recommendation: 'Chalk up some routes at your local indoor climbing gym or boulder lounge.'},
      {name: 'Indoor Ice Skating', indoorOutdoor: 'Indoor', maxTemp: 50, minTemp: -100, maxPrecip: 100, minPrecip: 0.02, recommendation: 'Head to an indoor ice skating rink and enjoy gliding on the ice. The cold atmosphere will make for a refreshing and enjoyable skating session.'},
      {name: 'Indoor Ice Hockey', indoorOutdoor: 'Indoor', maxTemp: 50, minTemp: -100, maxPrecip: 100, minPrecip: 0.02, recommendation: 'Head to your local frozen puddle under a roof and play ice hockey with your buddies.'},
      {name: 'Bikram Yoga', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Embrace the extreme heat with a hot yoga session. The combination of lava-like temperatures and yoga poses will enhance flexibility and relaxation.'},
      {name: 'Sauna & Cold Plunge', indoorOutdoor: 'Indoor', maxTemp: 50, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Take advantage of the cooler temps and head to the spa. The extreme changes from sauna heat to the polar plunge are great for your body.'},
  
      {name: 'Kayaking', indoorOutdoor: 'Outdoor', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Paddle your way to a healthier future on a watercraft beloved since antiquity. Why is there a steaming horizon on the river up ahead? Get ready for some good ol\' carnage you har boater!!'},
      {name: 'Running', indoorOutdoor: 'Outdoor', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Take advantage of the sunny weather a go for a job in a nearby park or trail. Don\'t forget to stay hydrated!'},
      {name: 'Outdoor Dance', indoorOutdoor: 'Outdoor', maxTemp: 90, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: 'Put on some lively music and dance in your backyard or at the park!'},
      {name: 'Outdoor Rock Climbing', indoorOutdoor: 'Outdoor', maxTemp: 80, minTemp: 40, maxPrecip: 0.1, minPrecip: 0, recommendation: 'Put on your send sweater and enjoy some fresh air on the climbing wall either at your gym\'s outdoor wall or a local outdoor climbing area.'},
      {name: 'Hiking', indoorOutdoor: 'Outdoor', maxTemp: 80, minTemp: 40, maxPrecip: 0.1, minPrecip: 0, recommendation: 'Science says walking makes you live longer. Why not give your future self a gift by choosing a scenic trail to enjoy some natural beauty?'},
      {name: 'Skiing & Snowboarding', indoorOutdoor: 'Outdoor', maxTemp: 32, minTemp: 10, maxPrecip: 12, minPrecip: 0, recommendation: 'Enjoy the freezing temperatures and sunny weather and hit the slopes!'},
      {name: 'Outdoor Ice Skating', indoorOutdoor: 'Outdoor', maxTemp: 20, minTemp: 10, maxPrecip: 0, minPrecip: 0, recommendation: 'Harness your inner Dutchperson and go gliding on your local lake or river. Always remember to check local ice conditions & thickness!'},
      {name: 'Ice Fishing', indoorOutdoor: 'Outdoor', maxTemp: 25, minTemp: -100, maxPrecip: 0, minPrecip: 0, recommendation: 'The water is hard and the brews are frosty. Time to grab your drill and get to jigging! Just make sure to stay on TOP of the ice - in this sport, those attempting to fish from under the ice are called \'morons.\''},
      {name: 'Water Biking', indoorOutdoor: 'Outdoor', maxTemp: 200, minTemp: 85, maxPrecip: 24, minPrecip: 2, recommendation: 'Take advantage of the flash flood puddles and grab your bike. Speed through for laughs and a work-out!'},
  
      {name: 'Winter Nature Walk', indoorOutdoor: 'Outdoor', maxTemp: 32, minTemp: 18, maxPrecip: 1, minPrecip: 0, recommendation: 'Bundle up in warm layers and take a serene walk through a snowy landscape. The crisp winter air and snow-covered scenery provide a refreshing and peaceful experience.'},
      {name: 'Indoor Trampoline Jumping', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: 'Have a bouncing good time at an indoor trampoline park. Jumping on trampolines is a fun and energetic way to stay active, regardless of the weather outside.'},
      {name: 'Snowshoeing Adventure', indoorOutdoor: 'Outdoor', maxTemp: 32, minTemp: 10, maxPrecip: 1, minPrecip: 0, recommendation: "Explore snowy trails with a pair of snowshoes. It's a fantastic way to enjoy the winter wonderland while getting a great workout."},
      {name: 'Pilates', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: "Strengthen your core and improve flexibility with an indoor Pilates session. It's a low-impact exercise that can be tailored to various skill levels."},
      {name: 'Urban Photography Stroll', indoorOutdoor: 'Outdoor', maxTemp: 85, minTemp: 50, maxPrecip: 0, minPrecip: 0, recommendation: "Take advantage of the pleasant weather by going on a photography stroll in your city or a nearby picturesque area. Capture the beauty of your surroundings."},
      {name: 'Cooking Class', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: -100, maxPrecip: 24, minPrecip: 0.02, recommendation: "Embrace the indoors by attending a cooking class. Learn new recipes, enjoy the delicious results, and indulge in some self-care"},
      {name: 'Snowman Building Challenge', indoorOutdoor: 'Outdoor', maxTemp: 32, minTemp: 10, maxPrecip: 1, minPrecip: 0, recommendation: "Gather friends or family for a friendly competition of building the best snowman. It's a classic winter activity that brings joy and creativity."},
      {name: 'Indoor Mini Golf', indoorOutdoor: 'Indoor', maxTemp: 200, minTemp: 70, maxPrecip: 24, minPrecip: 0.02, recommendation: "Bring the sunshine indoors by playing mini golf with a tropical theme. It's a lighthearted and entertaining way to spend time with friends."},
      {name: 'Sledding / Toboggan', indoorOutdoor: 'Outdoor', maxTemp: 32, minTemp: 10, maxPrecip: 1, minPrecip: 0, recommendation: "Find a local hill and enjoy the thrill of sledding down the slopes. It's a classic winter activity that's sure to bring laughter and excitement."},
      {name: 'Do a Puzzle', indoorOutdoor: 'Indoor', maxTemp: 85, minTemp: 50, maxPrecip: 12, minPrecip: 0.02, recommendation: "Stay cozy indoors with a puzzle. Gather friends or family for hours of friendly competition and entertainment."},
    ]
  )
}
