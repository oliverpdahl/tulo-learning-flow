require 'test_helper'

class CompletablesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get completables_index_url
    assert_response :success
  end

  test "should get update" do
    get completables_update_url
    assert_response :success
  end

end
