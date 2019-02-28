namespace DatingApp.API.Helpers
{
    public class MessageParams
    {
        private const int maxItemsPerPage = 50;

        private int itemsPerPage = 10;

        public int CurrentPage { get; set; } = 1;

        public int ItemsPerPage
        {
            get
            {
                return itemsPerPage;
            }
            set
            {
                itemsPerPage = (value > maxItemsPerPage) ? maxItemsPerPage : value;
            }
        }

        public int UserId { get; set; }
        
        public string MessageContainer { get; set; } = "Unread";
    }
}