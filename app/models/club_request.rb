class ClubRequest < ApplicationRecord
  belongs_to :organization
  belongs_to :user
  has_many :activities, as: :target, dependent: :destroy

  after_update :create_club, if: ->{self.joined?}

  serialize :time_activity, Array

  enum status: {pending: 0, joined: 1, reject: 2}
  enum club_type: {sport: 1, game: 2, education: 3, music: 4,
    entertainment: 5, confidential: 6, junket: 7, other: 0}

  validates :name, presence: true, uniqueness: true,
    length: {maximum: Settings.club_request.max_name_length}
  validates :content, presence: true

  validates :goal, presence: true

  delegate :full_name, to: :user, allow_nil: :true

  scope :order_date_desc, ->{order created_at: :desc}

  delegate :full_name, to: :user, allow_nil: :true

  mount_uploader :logo, ImageUploader

  private
  def create_club
    Club.create_after_approve self
  end
end
