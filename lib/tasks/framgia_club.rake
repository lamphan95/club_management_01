namespace :db do
  desc "Seeding data"
  task seeding: :environment do
    %w[db:drop db:create db:migrate db:seed].each do |task|
      Rake::Task[task].invoke
    end

    framgiadn = Organization.create!(
      name: "Framgia Da Nang",
      description: "Chi nhánh Framgia tại Đà Nẵng",
      phone: "0966077747",
      email: "framgiadn@framgia.com",
      location: "Da Nang"
    )
    framgiahn = Organization.create!(
      name: "Framgia Ha Noi",
      description: "Chi nhánh Framgia tại Hà Nội",
      phone: "0966077747",
      email: "framgiahn@framgia.com",
      location: "Ha Noi"
    )
    boss = User.create!(
      email: "fclub.framgia.info@gmail.com",
      full_name: "Boss",
      password: "fclub.framgia.info@gmail.com",
      phone: "01689020813",
    )
    Admin.create!(
      email: "fclub.framgia.info@gmail.com",
      full_name: "Admin",
      password: "fclub.framgia.info@gmail.com",
      phone: "0966077747",
    )
    bongda_club = Club.create!(
      name: "CLB Bóng đá",
      is_active: 1,
      club_type: 1,
      organization_id: framgiadn.id,
      content: "Câu lạc bộ bóng đá tại FramGia Đà Nẵng",
      goal: "Mục tiêu câu lạc bộ giải trí",
      money: 0
    )
    tuthien_club = Club.create!(
      name: "CLB Từ Thiện",
      is_active: 1,
      club_type: 0,
      organization_id: framgiadn.id,
      content: "Câu lạc bộ từ thiện tại FramGia Đà Nẵng",
      goal: "Mục tiêu câu lạc bộ Từ thiện",
      money: 0
    )
    game_club = Club.create!(
      name: "CLB Game",
      is_active: 1,
      club_type: 2,
      organization_id: framgiadn.id,
      content: "Câu lạc bộ game tại FramGia Đà Nẵng",
      goal: "Mục tiêu câu lạc bộ giải trí",
      money: 0
    )
    tiengnhat_club = Club.create!(
      name: "CLB Tiếng Nhật",
      is_active: 1,
      club_type: 1,
      organization_id: framgiadn.id,
      content: "Câu lạc bộ tiếng nhật tại FramGia Đà Nẵng",
      goal: "Mục tiêu câu lạc bộ Học tập",
      money: 0
    )
    framgiafc = Club.create!(
      name: "Framgia FC",
      is_active: 1,
      club_type: 0,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ giải trí",
      money: 0
    )
    gameclub = Club.create!(
      name: "Game Club",
      is_active: 1,
      club_type: 1,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ game tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ giải trí",
      money: 0
    )
    japaneseclub = Club.create!(
      name: "Japanese Club",
      is_active: 1,
      club_type: 3,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ tiếng nhật tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ Học tập",
      money: 0
    )
    charityclub = Club.create!(
      name: "Charity Club",
      is_active: 1,
      club_type: 0,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ từ thiện tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ Từ thiện",
      money: 0
    )
    chinese_chess_club = Club.create!(
      name: "Chinese chess Club",
      is_active: 1,
      club_type: 2,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ cờ tướng tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ giải trí",
      money: 0
    )
    dance_club = Club.create!(
      name: "Dance Club",
      is_active: 1,
      club_type: 5,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ dance tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ giải trí",
      money: 0
    )
    gymclub = Club.create!(
      name: "Gym Club",
      is_active: 1,
      club_type: 5,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ Gym tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ Cải thiện thể chất",
      money: 0
    )
     japanese_food_club = Club.create!(
      name: "Japanese Food Club",
      is_active: 1,
      club_type: 7,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ Japanese Food tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ Ăn uống",
      money: 0
    )
    intellect_game_club = Club.create!(
      name: "Intellect Game Club",
      is_active: 1,
      club_type: 2,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ Intellect Game tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ giải trí",
      money: 0
    )
     music_club = Club.create!(
      name: "Music Club",
      is_active: 1,
      club_type: 4,
      organization_id: framgiahn.id,
      content: "Câu lạc bộ âm nhạc tại FramGia Hà Nội",
      goal: "Mục tiêu câu lạc bộ giải trí",
      money: 0
    )
    UserOrganization.create!(
      user_id: boss.id,
      organization_id: framgiadn.id,
      status: 1,
      is_admin: 1
    )
    UserOrganization.create!(
      user_id: boss.id,
      organization_id: framgiahn.id,
      status: 1,
      is_admin: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: bongda_club.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: tuthien_club.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: game_club.id,
      status: boss.id,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: tiengnhat_club.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: framgiafc.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: gameclub.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: japaneseclub.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: charityclub.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: chinese_chess_club.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: dance_club.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: gymclub.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: japanese_food_club.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: intellect_game_club.id,
      status: 1,
      is_manager: 1
    )
    UserClub.create!(
      user_id: boss.id,
      club_id: music_club.id,
      status: 1,
      is_manager: 1
    )
  end
end
