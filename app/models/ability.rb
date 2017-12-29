class Ability
  include CanCan::Ability

  def initialize user
    can :read, :all
    can :is_admin, Club do |club|
      club.user_clubs.manager.map(&:user_id).include?(user.id)
    end
    can [:edit, :update], [Club]

    can :create, [StatisticReport] do |statistic|
      club = Club.find_by id: statistic.club_id
      club.user_clubs.manager.map(&:user_id).include?(user.id)
    end
  end
end
