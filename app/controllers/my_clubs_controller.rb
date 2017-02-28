class MyClubsController < ApplicationController
  before_action :authenticate_user!

  def index
    clubs = Club.of_organizations(current_user.organizations).of_user_clubs(
      current_user.user_clubs.joined)
    @q = clubs.search(params[:q])
    @clubs = @q.result.newest.page(params[:page]).per Settings.club_per_page
  end
end
