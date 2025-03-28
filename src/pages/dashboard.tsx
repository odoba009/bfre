import "./css/dashboard.css"
import transfer from "../assets/transfer.png"
import loan from "../assets/loan.png"
import menu from "../assets/menu.png"
import deposit from "../assets/deposit.png"
import info from "../assets/info.png"
import { toast } from 'react-toastify'
import React from "react"
import { Link } from "react-router-dom"

export default function Dashboard() {
    const [isLoading, SetIsLoading] = React.useState<boolean>(false)
    const [transactions, setTransactions] = React.useState<{ date: string; amount: string }[]>([]);
    const [transactions500, setTransactions500] = React.useState<{ date: string; amount: string }[]>([]);


    const balance: number = 31500.31
    const [formattedBal, SetFormattedBal] = React.useState<string>("")

    const specificDate: Date = new Date("March 05, 2025");
    const today: Date = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds: number = today.getTime() - specificDate.getTime();

    // Convert the difference to days
    const differenceInDays: number = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    function calcNewBalance() {
        const interest: number = differenceInDays * 1000;
        SetFormattedBal(Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(balance + interest))
    }

    const generateTransactions = async () => {
        const startDate = new Date(2025, 2, 6); // March 5, 2024
        try {
            SetIsLoading(true);
            const response = await fetch("https://worldtimeapi.org/api/ip");
            const data = await response.json();
            var today = new Date(data.utc_datetime);
            SetIsLoading(false);
        } catch (err) {
            var today = new Date();
            SetIsLoading(false);
        }
        SetIsLoading(false);
        const txnList = [];

        while (startDate <= today) {
            txnList.push({
                date: startDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
                amount: "$1,000.00" // You can change this dynamically if needed
            });
            startDate.setDate(startDate.getDate() + 1); // Move to next day
        }

        setTransactions(txnList.reverse()); // Reverse to show latest first
    };

    const generate500Transactions = () => {
        const startDate = new Date(2025, 2, 1);
        const today = new Date(2025, 2, 5);
        const txnList = [];

        while (startDate <= today) {
            txnList.push({
                date: startDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
                amount: "$300.00" // You can change this dynamically if needed
            });
            startDate.setDate(startDate.getDate() + 1); // Move to next day
        }

        setTransactions500(txnList.reverse()); // Reverse to show latest first
    };

    React.useEffect(() => {
        calcNewBalance();

        generateTransactions();
        generate500Transactions();
    }, [])

    return (
        <div>
            <div className="dashboard-nav">
                <div style={{ height: 30, marginLeft: 20 }}>
                    <img style={{ height: "100%", objectFit: "contain" }} src={menu} alt="" />
                </div>
                <div className="audiowide">TrustFund Home</div>
                <div></div>
            </div>

            <div className='container'>

                <p style={{ margin: "20px 0", fontWeight: "bold" }}>Welcome, Gladis Elena</p>
                <div className="dashboard-container">
                    <div>
                        <div className="accounts">
                            <div style={{ marginLeft: 10, fontSize: 20, color: "gray" }}>
                                <p style={{ fontWeight: "bold" }}>Accounts</p>
                            </div>
                            <div className="acc-summary">
                                <div>
                                    <p>Checking</p>
                                    <p> <small> x6739 </small></p>
                                </div>

                                <div>
                                    <p>{formattedBal}</p>
                                    <p><small>Available</small></p>
                                </div>
                            </div>
                            {/* <div style={{backgroundColor:"#E31837", margin:"0 20px", padding:"10px"}}>
                        Transactions
                    </div> */}
                        </div>

                        <div className="dashboard-options">
                            <p style={{ textAlign: "center", fontSize: 20, color: "gray", fontWeight: "bold" }} className="audiowide">Trustfund</p>

                            <p style={{color: "red", textAlign: "center", background:"#ffd7d7", padding:"10px", fontWeight:"bold"}}>IRS tax payment required</p>
                            <div className="dash-options">
                                <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.error("You have to pay $5,000.00 tax to IRS agent")}>
                                    <div className="item-img">
                                        <img src={transfer} alt="" />
                                    </div>
                                    <small>Transfer</small>
                                </div>
                                <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.warning("You do not have permission to perform this task")}>
                                    <div className="item-img">
                                        <img src={deposit} alt="" />
                                    </div>
                                    <small>Deposit</small>
                                </div>
                                <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.warning("You do not have permission to perform this task")}>
                                    <div className="item-img">
                                        <img src={loan} alt="" />
                                    </div>
                                    <small>Loan</small>
                                </div>
                                <Link to={"/info"}>
                                <div className="items" style={{ cursor: "pointer" }}>
                                    <div className="item-img">
                                        <img src={info} alt="" />
                                    </div>
                                   
                                    
                                    <small>Info</small>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="transactions">
                        <div style={{ fontSize: 18, color: "gray" }}>
                            <p style={{ fontWeight: "bold" }}>Transactions</p>
                        </div>
                        <br />
{
    isLoading?
    <p style={{textAlign:"center"}}>Loading Transactions....</p>
    :
                                <div>
                        {transactions.map((txn, index) => (
                            <div key={index} className="txn-item" style={{ marginRight: 10 }}>
                                <div>
                                    <p style={{ fontWeight: "bold" }}>Astrofcm investment profit</p>
                                    <small style={{ color: "gray" }}>{txn.date}. Checking</small>
                                </div>

                                <div style={{ fontWeight: "bold", color: "green" }}>
                                    {txn.amount}
                                </div>
                            </div>
                        ))}
                        {transactions500.map((txn, index) => (
                            <div key={index} className="txn-item" style={{ marginRight: 10 }}>
                                <div>
                                    <p style={{ fontWeight: "bold" }}>Direct Deposit from x3208</p>
                                    <small style={{ color: "gray" }}>{txn.date}. Checking</small>
                                </div>

                                <div style={{ fontWeight: "bold", color: "green" }}>
                                    {txn.amount}
                                </div>
                            </div>
                        ))}



                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Opening balance</p>
                                <small style={{ color: "gray" }}>Jan 10, 2020. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "green" }}>
                                $30,000.31
                            </div>
                        </div>
                        </div>
}                    </div>
                </div>
            </div>
        </div>
    )
}
