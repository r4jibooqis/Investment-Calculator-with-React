import TableHead from "./TableHead"
import TableBody from "./TableBody"
import TableRow from "./TableRow"

export default function Table({ investmentResult }) {
    return (
        <table id="result">
            <TableHead />
            <TableBody >
                {investmentResult.map((invest) => (
                    <TableRow
                        key={invest.year}
                        year={invest.year}
                        interest={invest.interest}
                        investmentValue={invest.valueEndOfYear}
                        totalInterest={invest.totalInterest}
                        investedCapital={invest.investedCapital}
                    />
                ))}
            </TableBody>
        </table>
    )
}