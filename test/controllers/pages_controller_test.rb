require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get about" do
    get pages_about_url
    assert_response :success
  end

  test "should get join_team" do
    get pages_join_team_url
    assert_response :success
  end

  test "should get faq" do
    get pages_faq_url
    assert_response :success
  end

  test "should get contact" do
    get pages_contact_url
    assert_response :success
  end
end
